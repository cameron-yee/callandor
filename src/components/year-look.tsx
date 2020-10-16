import React, { useState, useEffect } from 'react'

import { useBudget, useMonthlyPurchases } from '../hooks'

import { CATEGORIES, SUB_CATEGORIES } from '../constants'

import { formatClassList } from '../utils'

import Select from './select'

import { BudgetFilterType, PurchaseFilterType } from '../types'


const TEXT: string = `
  font-secondary
  text-base
`

const LABEL: string = `
  ${TEXT}
  text-gray-200
`

const POSITIVE: string = `
  ${TEXT}
  text-green-400
`

const NEGATIVE: string = `
  ${TEXT}
  text-red-400
`

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

  const monthOneNet: number = budget - monthOnePurchases
  const monthTwoNet: number = budget - monthTwoPurchases
  const monthThreeNet: number = budget - monthThreePurchases
  const monthFourNet: number = budget - monthFourPurchases
  const monthFiveNet: number = budget - monthFivePurchases
  const monthSixNet: number = budget - monthSixPurchases
  const monthSevenNet: number = budget - monthSevenPurchases
  const monthEightNet: number = budget - monthEightPurchases
  const monthNineNet: number = budget - monthNinePurchases
  const monthTenNet: number = budget - monthTenPurchases
  const monthElevenNet: number = budget - monthElevenPurchases
  const monthTwelveNet: number = budget - monthTwelvePurchases

  const formattedNegative: string = formatClassList(NEGATIVE)
  const formattedPositive: string = formatClassList(POSITIVE)
  const formattedLabel: string = formatClassList(LABEL)

  useEffect(() => {
    setFilter(filterType === 'category'
      ? CATEGORIES[0]
      : filterType === 'subCategory'
        ? SUB_CATEGORIES[0]
        : '-----')
  }, [filterType])

  return (
    <div className='w-full'>
      <h2 className="my-3 text-2xl tracking-widest font-main font-semibold text-gray-200">{year} Look (+/- Budget)</h2>
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
          <div className={formattedLabel}>January: <span className={monthOneNet >= 0 ? formattedPositive : formattedNegative}>{monthOneNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>February: <span className={monthTwoNet >= 0 ? formattedPositive : formattedNegative}>{monthTwoNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>March: <span className={monthThreeNet >= 0 ? formattedPositive : formattedNegative}>{monthThreeNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>April: <span className={monthFourNet >= 0 ? formattedPositive : formattedNegative}>{monthFourNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>May: <span className={monthFiveNet >= 0 ? formattedPositive : formattedNegative}>{monthFiveNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>June: <span className={monthSixNet >= 0 ? formattedPositive : formattedNegative}>{monthSixNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>July: <span className={monthSevenNet >= 0 ? formattedPositive : formattedNegative}>{monthSevenNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>August: <span className={monthEightNet >= 0 ? formattedPositive : formattedNegative}>{monthEightNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>September: <span className={monthNineNet >= 0 ? formattedPositive : formattedNegative}>{monthNineNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>October: <span className={monthTenNet >= 0 ? formattedPositive : formattedNegative}>{monthTenNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>November: <span className={monthElevenNet >= 0 ? formattedPositive : formattedNegative}>{monthElevenNet.toFixed(2)}</span></div>
          <div className={formattedLabel}>December: <span className={monthTwelveNet >= 0 ? formattedPositive : formattedNegative}>{monthTwelveNet.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  )
}

export default YearLook

