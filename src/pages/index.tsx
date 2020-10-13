import React, { FormEvent, useEffect, useState } from 'react'

import AnnualNetIncome from '../components/annual-net-income'
import MonthlyNetIncome from '../components/monthly-net-income'
import MonthlyBudget from '../components/monthly-budget'
import MonthlyPurchasesAmount from '../components/monthly-purchases'

const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const YEARS: string[] = [
  '2020',
  '2021'
]

const Index = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedYear, setSelectedYear] = useState<number>(0)

  useEffect(() => {
    const date: Date = new Date()
    const currentMonth: number = date.getMonth()
    const currentYear: number = date.getFullYear() - 2020

    setSelectedMonth(currentMonth)
    setSelectedYear(currentYear)
  }, [])

  return (
    <div>
      <h1>{MONTHS[selectedMonth]}, {YEARS[selectedYear]} Dashboard</h1>

      <select onChange={(e: FormEvent) => setSelectedMonth(MONTHS.indexOf((e.target as HTMLSelectElement).value))} value={MONTHS[selectedMonth]}>
        {MONTHS.map((month) => {
          return (
            <option key={`${month.toLowerCase()}`}>{month}</option>
          )
        })}
      </select>
      <select onChange={(e: FormEvent) => setSelectedYear(YEARS.indexOf((e.target as HTMLSelectElement).value))} value={YEARS[selectedYear]}>
        {YEARS.map((year) => {
          return (
            <option key={`${year.toLowerCase()}`}>{year}</option>
          )
        })}
      </select>

      <div>
        <p>Annual Net Income: <AnnualNetIncome /></p>
        <p>Monthly Net Income: <MonthlyNetIncome /></p>
        <p>Monthly Budget: <MonthlyBudget /></p>
        <p>Monthly Purchases: <MonthlyPurchasesAmount month={selectedMonth + 1} year={selectedYear + 2020} /></p>
        <p>
          Monthly Food/Drink Purchases:&nbsp;
          <MonthlyPurchasesAmount month={selectedMonth + 1} year={selectedYear + 2020} filter='foodDrink' filterType='category' />
          &nbsp;out of&nbsp;
          <MonthlyBudget filter='foodDrink' filterType='category' />
        </p>
      </div>
    </div>
  )
}

export default Index
