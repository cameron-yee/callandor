import React from 'react'
import { useMonthlyPurchases, useBudget, useRecurring } from '../hooks'
import { RecurringItem } from '../types'

import { formatClassList } from '../utils'


const OVER: string = `
  text-red-500
`

const UNDER: string = `
  font-bold
`

const BUDGET: string = `
  font-bold
  text-gray-100
`

type Edge = {
  node: RecurringItem
}

type RemainingProps = {
  filter?: string,
  filterType?: 'category' | 'subCategory'
  month: number,
  recurring?: boolean,
  year: number
}

const Purchases = ({
  filter,
  filterType,
  month,
  recurring=false,
  year
}: RemainingProps) => {
  const formattedBudget: string = formatClassList(BUDGET)

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: month, year: year, filter: filter, filterType: filterType})
  const totalBudget: number = useBudget({filter: filter, filterType: filterType})
  const recurringItems: Edge[] = useRecurring({})

  const monthlyRecurringAmount: number = recurringItems.map((item: Edge) => {
    if (item.node.frequency === 'yearly') {
      return item.node.amount / 12
    }

    return item.node.amount
  }).reduce((a: number, b: number) => a + b, 0)

  const monthlyNetIncomeMinusRecurring: number = recurring
    ? totalBudget - monthlyRecurringAmount
    : totalBudget

  const formattedPurchases = totalMonthlyPurchases <= monthlyNetIncomeMinusRecurring
    ? formatClassList(UNDER)
    : formatClassList(OVER)

  return (
    <p>Purchases: <span className={formattedPurchases}>${totalMonthlyPurchases.toFixed(2)}</span> out of <span className={formattedBudget}>${monthlyNetIncomeMinusRecurring.toFixed(2)}</span></p>
  )
}

export default Purchases
