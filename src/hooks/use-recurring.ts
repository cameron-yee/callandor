import { graphql, useStaticQuery } from 'gatsby'

import { CategoryFilterType, RecurringItem } from '../types'


type Edge = {
  node: RecurringItem
}

type AllRecurringJson = {
  edges: Edge[]
}

type Data = {
  allRecurringJson: AllRecurringJson
}

type RecurringProps = {
  filter?: string,
  filterType?: CategoryFilterType | 'frequency'
}

const filterRecurringItems = (recurringItems: Edge[], filter?: string, filterType?: CategoryFilterType | 'frequency'): Edge[] => {
  if (filter && filterType) {
    return recurringItems.filter((item: Edge) => {
      return item[filterType] === filter
    })
  }

  return recurringItems
}

const useRecurring = ({
  filter,
  filterType,
}: RecurringProps) => {
  const data: Data = useStaticQuery(graphql`
    query {
      allRecurringJson {
        edges {
          node {
            amount
            category
            subCategory
            frequency
          }
        }
      }
    }
  `)

  if (filterType === '-----') {
    return data.allRecurringJson.edges
  }

  return filterRecurringItems(data.allRecurringJson.edges, filter, filterType)
}

export default useRecurring
