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
    <div className="flex flex-wrap">
      <div className="flex w-full">
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

      <h1 className="my-3 text-2xl tracking-widest font-main font-semibold text-gray-200">{MONTHS[selectedMonth]}, {YEARS[selectedYear]} Dashboard</h1>

      {fixedItems &&
        <div className="w-full">
          <h2 className="my-3 text-2xl tracking-widest font-main font-semibold text-gray-200">Fixed Items</h2>
          <div>
            <p className="text-base tracking-wider font-main text-gray-200">Annual Net Income: {annualNetIncome.toFixed(2)}</p>
            <p className="text-base tracking-wider font-main text-gray-200">Monthly Net Income: {monthlyNetIncome.toFixed(2)}</p>
            <p className="text-base tracking-wider font-main text-gray-200">Monthly Budget: {totalBudget.toFixed(2)}</p>
          </div>

        </div>
      }
      <div className="w-full">
        <h2 className="my-3 text-2xl tracking-widest font-main font-semibold text-gray-200">{MONTHS[selectedMonth]} Items</h2>
        <p className="text-base tracking-wider font-secondary text-gray-200">Total Purchases: {totalMonthlyPurchases.toFixed(2)}</p>
      </div>
      {(categories || subCategories) &&
        <div className="w-full">
          <h3 className="my-3 text-xl tracking-widest font-main font-semibold text-gray-200">Categories/Sub-Categories</h3>
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
