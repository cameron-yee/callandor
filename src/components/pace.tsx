import React, { useState } from 'react'
import { useBudget, useMonthlyPurchases, useRecurringAmount } from '../hooks'

import { formatClassList, joinStrings } from '../utils'


const TEXT: string = `
  font-secondary
  text-base
  tracking-wider
`

const LABEL: string = `
  ${TEXT}
  mt-2
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
  filterType: 'category' | 'subCategory',
  recurring?: boolean
}

const Pace = ({
  filter,
  filterType,
  recurring=false
}: RemainingProps) => {
  const formattedLabel: string = formatClassList(LABEL)

  const date: Date = new Date()
  const fullYear: number = date.getFullYear()

  const currentDay: number = date.getDate()
  const currentMonth: number = date.getMonth()

  const daysInMonth: number = new Date(fullYear, currentMonth + 1, 0).getDate()

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: currentMonth+ 1, year: fullYear, filter: filter, filterType: filterType})

  const budget: number = useBudget({ filter: filter, filterType: filterType })
  const monthlyRecurringAmount: number = useRecurringAmount({})

  const monthlyBudget: number = recurring
    ? budget - monthlyRecurringAmount
    : budget

  const pace: number = totalMonthlyPurchases / currentDay * daysInMonth

  const formattedPace = pace <= monthlyBudget
    ? formatClassList(joinStrings(' ', TEXT, UNDER))
    : formatClassList(joinStrings(' ', TEXT, OVER))

  return (
    <p className={formattedLabel}>On pace to spend: <span className={formattedPace}>${pace.toFixed(2)}</span></p>
  )
}

export default Pace

