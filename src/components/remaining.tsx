import React, { useState } from 'react'
import { useBudget, useMonthlyPurchases } from '../hooks'

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

type RemainingProps = {
  filter: string,
  filterType: 'category' | 'subCategory'
  month: number,
  year: number
}

const Remaining = ({
  filter,
  filterType,
  month,
  year
}: RemainingProps) => {
  const formattedLabel: string = formatClassList(LABEL)

  const totalBudget: number = useBudget({filter: filter, filterType: filterType})
  const totalMonthlyPurchases: number = useMonthlyPurchases({month:month, year: year, filter: filter, filterType: filterType})
  const totalRemaining: number = 100 - (totalMonthlyPurchases / totalBudget) * 100

  const formattedRemaining = totalRemaining >= 0
    ? formatClassList(joinStrings(' ', TEXT, UNDER))
    : formatClassList(joinStrings(' ', TEXT, OVER))

  return (
    <p className={formattedLabel}><span className={formattedRemaining}>{totalRemaining.toFixed(2)}%</span> remaining</p>
  )
}

export default Remaining
