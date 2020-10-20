import React, { useState, useEffect } from 'react'

import { useBudget, useMonthlyPurchases } from '../hooks'

import { CATEGORIES } from '../constants'

import { formatClassList } from '../utils'

import Select from './select'

import { Category, CategoryFilterType } from '../types'


const CATEGORY: string = `
  rounded
  w-full
`

const MONTHS: string = `
  mt-3
`

const TEXT: string = `
  font-secondary
  text-base
`

const LABEL: string = `
  ${TEXT}
  mt-1
  text-gray-200
`

const POSITIVE: string = `
  ${TEXT}
  font-semibold
`

const NEGATIVE: string = `
  ${TEXT}
  text-red-400
`

const SUB_CATEGORY: string = `
  mt-2
  rounded
  w-full
`

const WRAPPER: string = `
  mt-3
  w-full
`

const YearLook = ({ year }: { year: number }) => {
  const [filter, setFilter] = useState<string>()
  const [filterType, setFilterType] = useState<CategoryFilterType>('-----')
  const [selectedCategory, setSelectedCategory] = useState<string>('-----')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('-----')
  const [subCategories, setSubCategories] = useState<string[]>(['-----'])

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

  const budget: number = useBudget({filter: filter, filterType: filterType})

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

  const formattedCategory: string = formatClassList(CATEGORY)
  const formattedLabel: string = formatClassList(LABEL)
  const formattedMonths: string = formatClassList(MONTHS)
  const formattedNegative: string = formatClassList(NEGATIVE)
  const formattedPositive: string = formatClassList(POSITIVE)
  const formattedSubCategory: string = formatClassList(SUB_CATEGORY)
  const formattedWrapper: string = formatClassList(WRAPPER)

  useEffect(() => {
    if (selectedCategory === '-----' && selectedSubCategory === '-----') {
      setFilterType('-----')
      setFilter('')
      return
    }

    if (selectedCategory !== '-----' && selectedSubCategory !== '-----') {
      setFilterType('subCategory')
      setFilter(selectedSubCategory)
      return
    }

    setFilterType('category')
    setFilter(selectedCategory)
  }, [selectedCategory, selectedSubCategory])

  useEffect(() => {
    if (selectedCategory === '-----') {
      setSubCategories(['-----'])
      return
    }

    let subs: string[] = []

    for (let i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].name === selectedCategory) {
        for (let x = 0; x < CATEGORIES[i].subCategories.length; x++) {
          subs.push(CATEGORIES[i].subCategories[x].name)
        }
      }
    }
    setSubCategories([...subs, '-----'])
    setSelectedSubCategory('-----')
  }, [selectedCategory])

  return (
    <div className={formattedWrapper}>
      <h2>{year} Look <wbr />(+/- Budget)</h2>
      <div>
        <Select
          className={formattedCategory}
          value={selectedCategory}
          setValue={setSelectedCategory}
          options={[...CATEGORIES.map((category: Category) => category.name), '-----']}
        />
        <Select
          className={formattedSubCategory}
          value={selectedSubCategory}
          setValue={setSelectedSubCategory}
          options={
            selectedCategory === '-----'
              ? ['-----']
              : subCategories
          }
        />
        <div className={formattedMonths}>
          <div className={formattedLabel}>
            January:&nbsp;
            <span className={monthOneNet >= 0 ? formattedPositive : formattedNegative}>
              {monthOneNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthOneNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            February:&nbsp;
            <span className={monthTwoNet >= 0 ? formattedPositive : formattedNegative}>
              {monthTwoNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthTwoNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            March:&nbsp;
            <span className={monthThreeNet >= 0 ? formattedPositive : formattedNegative}>
              {monthThreeNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthThreeNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            April:&nbsp;
            <span className={monthFourNet >= 0 ? formattedPositive : formattedNegative}>
              {monthFourNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthFourNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            May:&nbsp;
            <span className={monthFiveNet >= 0 ? formattedPositive : formattedNegative}>
              {monthFiveNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthFiveNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            June:&nbsp;
            <span className={monthSixNet >= 0 ? formattedPositive : formattedNegative}>
              {monthSixNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthSixNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            July:&nbsp;
            <span className={monthSevenNet >= 0 ? formattedPositive : formattedNegative}>
              {monthSevenNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthSevenNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            August:&nbsp;
            <span className={monthEightNet >= 0 ? formattedPositive : formattedNegative}>
              {monthEightNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthEightNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            September:&nbsp;
            <span className={monthNineNet >= 0 ? formattedPositive : formattedNegative}>
              {monthNineNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthNineNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            October:&nbsp;
              <span className={monthTenNet >= 0 ? formattedPositive : formattedNegative}>
                {monthTenNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthTenNet)).toFixed(2)}
              </span>
          </div>
          <div className={formattedLabel}>
            November:&nbsp;
            <span className={monthElevenNet >= 0 ? formattedPositive : formattedNegative}>
              {monthElevenNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthElevenNet)).toFixed(2)}
            </span>
          </div>
          <div className={formattedLabel}>
            December:&nbsp;
            <span className={monthTwelveNet >= 0 ? formattedPositive : formattedNegative}>
              {monthTwelveNet < 0 && <>&ndash;&nbsp;</>}${(Math.abs(monthTwelveNet)).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearLook

