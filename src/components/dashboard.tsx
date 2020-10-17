import React, { useEffect, useState } from 'react'

import { MONTHS, YEARS } from '../constants'
import { Category, SubCategory } from '../types'
import { useAnnualNetIncome, useBudget, useMonthlyPurchases } from '../hooks'
import { formatClassList } from '../utils'

import DashboardCategory from './dashboard-category'
import Select from './select'
import YearLook from './year-look'

const FULL: string = `
  w-full
`

const BOLD: string = `
  font-bold
`

const CONTAINER: string = `
  ${FULL}
  flex
`

const WRAPPER: string = `
  flex
  flex-wrap
`

type DashboardProps = {
  categories?: Category[],
  subCategories?: SubCategory[],
  yearLook?: boolean,
  fixedItems?: boolean
}

const Dashboard = ({
  categories,
  subCategories,
  yearLook,
  fixedItems
}: DashboardProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedYear, setSelectedYear] = useState<number>(0)

  const annualNetIncome: number = useAnnualNetIncome({})
  const monthlyNetIncome: number = annualNetIncome / 12

  const totalBudget: number = useBudget({})

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: selectedMonth + 1, year: selectedYear + 2020})

  const date: Date = new Date()
  const fullYear: number = date.getFullYear()

  const currentMonth: number = date.getMonth()
  const currentYear: number = fullYear - 2020

  const formattedBold: string = formatClassList(BOLD)
  const formattedContainer: string = formatClassList(CONTAINER)
  const formattedFull: string = formatClassList(FULL)
  const formattedWrapper: string = formatClassList(WRAPPER)

  useEffect(() => {
    setSelectedMonth(currentMonth)
    setSelectedYear(currentYear)
  }, [])

  return (
    <div className={formattedWrapper}>
      <div className={formattedContainer}>
        <Select
          options={MONTHS}
          value={MONTHS[selectedMonth]}
          setValue={(value: string) => setSelectedMonth(MONTHS.indexOf(value))}
        />
        <Select
          options={YEARS}
          value={YEARS[selectedYear]}
          setValue={(value: string) => setSelectedYear(YEARS.indexOf(value))}
        />
      </div>

      <h1>{MONTHS[selectedMonth]}, {YEARS[selectedYear]} Dashboard</h1>

      {fixedItems &&
        <div className={formattedFull}>
          <h2>Fixed Items</h2>
          <div>
            <p>Annual Net Income: <span className={formattedBold}>${annualNetIncome.toFixed(2)}</span></p>
            <p>Monthly Net Income: <span className={formattedBold}>${monthlyNetIncome.toFixed(2)}</span></p>
            <p>Monthly Budget: <span className={formattedBold}>${totalBudget.toFixed(2)}</span></p>
          </div>

        </div>
      }
      <div className={formattedFull}>
        <h2>{MONTHS[selectedMonth]} Items</h2>
        <p>Total Purchases: <span className={formattedBold}>${totalMonthlyPurchases.toFixed(2)}</span></p>
      </div>
      {(categories || subCategories) &&
        <div className={formattedFull}>
          <h3>Categories/Sub-Categories</h3>
          {categories &&
            categories.map((category: Category, index: number) => {
              return (
                <DashboardCategory
                  key={`category-${index}`}
                  filter={category}
                  filterType='category'
                  month={selectedMonth + 1}
                  year={selectedYear + 2020}
                />
              )
            })
          }
          {subCategories &&
            subCategories.map((subCategory: SubCategory, index: number) => {
              return (
                <DashboardCategory
                  key={`sub-category-${index}`}
                  filter={subCategory}
                  filterType='subCategory'
                  month={selectedMonth + 1}
                  year={selectedYear + 2020}
                />
              )
            })
          }
        </div>
      }
      {yearLook &&
        <YearLook year={selectedYear + 2020} />
      }
    </div>
  )
}

export default Dashboard
