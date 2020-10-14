import React, { useState } from 'react'
import { useBudget, useMonthlyPurchases } from '../hooks'

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

  const totalBudget: number = useBudget({filter: filter, filterType: filterType})
  const totalMonthlyPurchases: number = useMonthlyPurchases({month:month, year: year, filter: filter, filterType: filterType})

  return (
    <p>{(100 - totalMonthlyPurchases / totalBudget * 100).toFixed(2)}% remaining</p>
  )
}

export default Remaining
