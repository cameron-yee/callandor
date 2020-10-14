import React, { useState } from 'react'
import { useMonthlyPurchases } from '../hooks'

type RemainingProps = {
  filter: string,
  filterType: 'category' | 'subCategory'
}

const Pace = ({
  filter,
  filterType,
}: RemainingProps) => {
  const date: Date = new Date()
  const fullYear: number = date.getFullYear()

  const currentDay: number = date.getDate()
  const currentMonth: number = date.getMonth()

  const daysInMonth: number = new Date(fullYear, currentMonth + 1, 0).getDate()

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: currentMonth+ 1, year: fullYear, filter: filter, filterType: filterType})

  return (
    <p>On pace to spend: ${(totalMonthlyPurchases / currentDay * daysInMonth).toFixed(2)}</p>
  )
}

export default Pace

