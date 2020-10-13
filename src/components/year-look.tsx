import React, { useState } from 'react'

import { useMonthlyPurchases } from '../hooks'

import { CATEGORIES, SUB_CATEGORIES } from '../constants'

import Select from './select'

import { PurchaseFilterType } from '../types'


const YearLook = ({ year }: { year: number }) => {
  const [filter, setFilter] = useState<string>('')
  const [filterType, setFilterType] = useState<PurchaseFilterType>('')

  const monthOne: number = useMonthlyPurchases({ month: 1, year: year, filter: filter, filterType: filterType})
  const monthTwo: number = useMonthlyPurchases({ month: 2, year: year, filter: filter, filterType: filterType})
  const monthThree: number = useMonthlyPurchases({ month: 3, year: year, filter: filter, filterType: filterType})
  const monthFour: number = useMonthlyPurchases({ month: 4, year: year, filter: filter, filterType: filterType})
  const monthFive: number = useMonthlyPurchases({ month: 5, year: year, filter: filter, filterType: filterType})
  const monthSix: number = useMonthlyPurchases({ month: 6, year: year, filter: filter, filterType: filterType})
  const monthSeven: number = useMonthlyPurchases({ month: 7, year: year, filter: filter, filterType: filterType})
  const monthEight: number = useMonthlyPurchases({ month: 8, year: year, filter: filter, filterType: filterType})
  const monthNine: number = useMonthlyPurchases({ month: 9, year: year, filter: filter, filterType: filterType})
  const monthTen: number = useMonthlyPurchases({ month: 10, year: year, filter: filter, filterType: filterType})
  const monthEleven: number = useMonthlyPurchases({ month: 11, year: year, filter: filter, filterType: filterType})
  const monthTwelve: number = useMonthlyPurchases({ month: 12, year: year, filter: filter, filterType: filterType})

  return (
    <div>
      <Select
        value={filterType}
        setValue={setFilterType}
        options={['category', 'subCategory', '']}
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
        <div>January: {monthOne}</div>
        <div>February: {monthTwo}</div>
        <div>March: {monthThree}</div>
        <div>April: {monthFour}</div>
        <div>May: {monthFive}</div>
        <div>June: {monthSix}</div>
        <div>July: {monthSeven}</div>
        <div>August: {monthEight}</div>
        <div>September: {monthNine}</div>
        <div>October: {monthTen}</div>
        <div>November: {monthEleven}</div>
        <div>December: {monthTwelve}</div>
      </div>
    </div>
  )
}

export default YearLook

