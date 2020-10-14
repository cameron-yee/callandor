import React, { useState, useEffect } from 'react'

import { useBudget, useMonthlyPurchases } from '../hooks'

import { CATEGORIES, SUB_CATEGORIES } from '../constants'

import Select from './select'

import { BudgetFilterType, PurchaseFilterType } from '../types'


const YearLook = ({ year }: { year: number }) => {
  const [filter, setFilter] = useState<string>('')
  const [filterType, setFilterType] = useState<BudgetFilterType | PurchaseFilterType>('-----')

  const monthOnePurchases: number = useMonthlyPurchases({ month: 1, year: year, filter: filter, filterType: filterType})
  const monthTwoPurchases: number = useMonthlyPurchases({ month: 2, year: year, filter: filter, filterType: filterType})
  const monthThreePurchases: number = useMonthlyPurchases({ month: 3, year: year, filter: filter, filterType: filterType})
  const monthFourPurchases: number = useMonthlyPurchases({ month: 4, year: year, filter: filter, filterType: filterType})
  const monthFivePurchases: number = useMonthlyPurchases({ month: 5, year: year, filter: filter, filterType: filterType})
  const monthSixPurchases: number = useMonthlyPurchases({ month: 6, year: year, filter: filter, filterType: filterType})
  const monthSevenPurchases: number = useMonthlyPurchases({ month: 7, year: year, filter: filter, filterType: filterType})
  const monthEightPurchases: number = useMonthlyPurchases({ month: 8, year: year, filter: filter, filterType: filterType})
  const monthNinePurchases: number = useMonthlyPurchases({ month: 9, year: year, filter: filter, filterType: filterType})
  const monthTenPurchases: number = useMonthlyPurchases({ month: 10, year: year, filter: filter, filterType: filterType})
  const monthElevenPurchases: number = useMonthlyPurchases({ month: 11, year: year, filter: filter, filterType: filterType})
  const monthTwelvePurchases: number = useMonthlyPurchases({ month: 12, year: year, filter: filter, filterType: filterType})

  const budget: number = useBudget({filter: filter, filterType: (filterType as BudgetFilterType)})

  useEffect(() => {
    setFilter(filterType === 'category'
      ? CATEGORIES[0]
      : filterType === 'subCategory'
        ? SUB_CATEGORIES[0]
        : '-----')
  }, [filterType])

  return (
    <div>
      <Select
        value={filterType}
        setValue={setFilterType}
        options={['category', 'subCategory', '-----']}
      />
      <Select
        value={filter}
        setValue={setFilter}
        options={
          filterType === 'category'
            ? CATEGORIES
            : filterType === 'subCategory'
              ? SUB_CATEGORIES
              : []
        }
      />
      <div>
        <div>January: {budget - monthOnePurchases}</div>
        <div>February: {budget - monthTwoPurchases}</div>
        <div>March: {budget - monthThreePurchases}</div>
        <div>April: {budget - monthFourPurchases}</div>
        <div>May: {budget - monthFivePurchases}</div>
        <div>June: {budget - monthSixPurchases}</div>
        <div>July: {budget - monthSevenPurchases}</div>
        <div>August: {budget - monthEightPurchases}</div>
        <div>September: {budget - monthNinePurchases}</div>
        <div>October: {budget - monthTenPurchases}</div>
        <div>November: {budget - monthElevenPurchases}</div>
        <div>December: {budget - monthTwelvePurchases}</div>
      </div>
    </div>
  )
}

export default YearLook

