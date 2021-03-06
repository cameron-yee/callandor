import { graphql, useStaticQuery } from 'gatsby'

import { BudgetItem, CategoryFilterType } from '../types'


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
  filterType?: CategoryFilterType
}


const getMonthlyBudget = (budgetItems: Edge[], filter?: string, filterType?: CategoryFilterType): number => {
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
    return getMonthlyBudget(data.allBudgetJson.edges)
  }

  return getMonthlyBudget(data.allBudgetJson.edges, filter, filterType)
}

export default useBudget
