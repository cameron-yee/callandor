import { graphql, useStaticQuery } from 'gatsby'

import { BudgetItem, BudgetFilterType } from '../types'

import { roundTwo } from '../utils'

type Edge = {
  node: BudgetItem
}

type AllBudgetJson = {
  edges: Edge[]
}

type Data = {
  allBudgetJson: AllBudgetJson
}

type MonthlyBudgetProps = {
  filter?: string,
  filterType?: BudgetFilterType
}


const getMonthlyBudget = (budgetItems: Edge[], filter?: string, filterType?: BudgetFilterType): number => {
  let monthlyBudget: number = 0

  for (let i: number = 0; i < budgetItems.length; i++) {
    if (!filter || !filterType) {
      monthlyBudget += budgetItems[i].node.monthlyBudget
      continue
    }

    if (filter === budgetItems[i].node[filterType]) {
      monthlyBudget += budgetItems[i].node.monthlyBudget
    }
  }

  return monthlyBudget
}

const useBudget = ({
  filter,
  filterType,
}: MonthlyBudgetProps) => {
  const data: Data = useStaticQuery(graphql`
    query {
      allBudgetJson {
        edges {
          node {
            category
            monthlyBudget
            subCategory
          }
        }
      }
    }
  `)

  if (filterType === '-----') {
    return roundTwo(getMonthlyBudget(data.allBudgetJson.edges))
  }

  return roundTwo(getMonthlyBudget(data.allBudgetJson.edges, filter, filterType))
}

export default useBudget
