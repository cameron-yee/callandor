import React, { useState } from 'react'
import { useMonthlyPurchases, useBudget } from '../hooks'

import { formatClassList, joinStrings } from '../utils'


const TEXT: string = `
  font-secondary
  text-base
  tracking-wider
`

const LABEL: string = `
  ${TEXT}
  text-gray-300
`

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
  const formattedLabel: string = formatClassList(LABEL)
  const formattedBudget: string = formatClassList(BUDGET)

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: month, year: year, filter: filter, filterType: filterType})
  const totalBudget: number = useBudget({filter: filter, filterType: filterType})

  const formattedPurchases = totalMonthlyPurchases <= totalBudget
    ? formatClassList(joinStrings(' ', TEXT, UNDER))
    : formatClassList(joinStrings(' ', TEXT, OVER))

  return (
    <p className={formattedLabel}>Purchases: <span className={formattedPurchases}>${totalMonthlyPurchases}</span> out of <span className={formattedBudget}>${totalBudget}</span></p>
  )
}

export default Purchases
