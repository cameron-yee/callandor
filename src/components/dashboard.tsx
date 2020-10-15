import React, { useEffect, useState } from 'react'

import { MONTHS, YEARS } from '../constants'
import { Category, SubCategory } from '../types'
import { useAnnualNetIncome, useBudget, useMonthlyPurchases } from '../hooks'

import DashboardCategory from './dashboard-category'
import Select from './select'
import YearLook from './year-look'

{/*<Dashboard categories={['social']} subCategories={['groceries', 'coffee']} yearLook={true} fixeditems={true} />*/}
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

  useEffect(() => {
    setSelectedMonth(currentMonth)
    setSelectedYear(currentYear)
  }, [])

  return (
    <div>
      <div>
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
        <React.Fragment>
          <h2>Fixed Items</h2>
          <div>
            <p>Annual Net Income: {annualNetIncome.toFixed(2)}</p>
            <p>Monthly Net Income: {monthlyNetIncome.toFixed(2)}</p>
            <p>Monthly Budget: {totalBudget.toFixed(2)}</p>
          </div>

          <h2>{MONTHS[selectedMonth]} Items</h2>
        </React.Fragment>
      }
      <p>Total Purchases: {totalMonthlyPurchases.toFixed(2)}</p>
      {(categories || subCategories) &&
        <div>
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
