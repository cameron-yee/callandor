import React from 'react'
import { useMonthlyPurchases, useBudget } from '../hooks'

import { formatClassList } from '../utils'


const OVER: string = `
  text-red-500
`

const UNDER: string = `
  text-green-500
`

const BUDGET: string = `
  font-bold
  text-gray-100
`

type RemainingProps = {
  filter: string,
  filterType: 'category' | 'subCategory'
  month: number,
  year: number
}

const Purchases = ({
  filter,
  filterType,
  month,
  year
}: RemainingProps) => {
  const formattedBudget: string = formatClassList(BUDGET)

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: month, year: year, filter: filter, filterType: filterType})
  const totalBudget: number = useBudget({filter: filter, filterType: filterType})

  const formattedPurchases = totalMonthlyPurchases <= totalBudget
    ? formatClassList(UNDER)
    : formatClassList(OVER)

  return (
    <p>Purchases: <span className={formattedPurchases}>${totalMonthlyPurchases}</span> out of <span className={formattedBudget}>${totalBudget}</span></p>
  )
}

export default Purchases
