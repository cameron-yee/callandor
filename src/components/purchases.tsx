import React, { useState } from 'react'
import { useMonthlyPurchases, useBudget } from '../hooks'

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
  const totalMonthlyPurchases: number = useMonthlyPurchases({month: month, year: year, filter: filter, filterType: filterType})
  const totalBudget: number = useBudget({filter: filter, filterType: filterType})

  return (
    <p>Purchases: ${totalMonthlyPurchases} out of ${totalBudget}</p>
  )
}

export default Purchases
