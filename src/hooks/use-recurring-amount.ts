import { useRecurring } from './index'

import { CategoryFilterType, RecurringItem } from '../types'

type Edge = {
  node: RecurringItem
}

type RecurringAmountProps = {
  filter?: string,
  filterType?: CategoryFilterType | 'frequency',
}

const useRecurringAmount = ({
  filter,
  filterType
}: RecurringAmountProps): number => {
  const recurringItems: Edge[] = useRecurring({
    filter: filter,
    filterType: filterType
  })

  const recurringAmount: number = recurringItems
    .map((item: Edge) => {
      if (item.node.frequency === 'yearly') {
        return item.node.amount / 12
      }

      return item.node.amount
    })
    .reduce((a: number, b: number) => a + b, 0)

  return recurringAmount
}

export default useRecurringAmount
