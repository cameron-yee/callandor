import { graphql, useStaticQuery } from 'gatsby'

import { Income, IncomeFilterType } from '../types'

import { roundTwo } from '../utils'

type Edge = {
  node: Income
}

type AllIncomesJson = {
  edges: Edge[]
}

type Data = {
  allIncomesJson: AllIncomesJson
}

type UseIncomeProps = {
  filter?: string,
  filterType?: IncomeFilterType
}

const getIncome = (
  incomes: Edge[],
  filter?: string,
  filterType?: IncomeFilterType
): number => {
    let annualNetIncome = 0
    for (let i: number = 0; i < incomes.length; i++) {
      if (!filter || !filterType) {
        annualNetIncome += incomes[i].node.payPeriodNetIncome * incomes[i].node.payPeriodsPerYear
        continue
      }

      if (filter === incomes[i].node[filterType]) {
        annualNetIncome += incomes[i].node.payPeriodNetIncome * incomes[i].node.payPeriodsPerYear
        continue
      }
    }

    return annualNetIncome
}

const useAnnualNetIncome = ({filter, filterType}: UseIncomeProps) => {
  const data: Data = useStaticQuery(graphql`
    query {
      allIncomesJson {
        edges {
          node {
            name
            payPeriodNetIncome
            payPeriodsPerYear
          }
        }
      }
    }
  `)

  const annualNetIncome: number = roundTwo(getIncome(data.allIncomesJson.edges, filter, filterType))

  return annualNetIncome
}

export default useAnnualNetIncome

