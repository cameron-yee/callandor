import React, { FormEvent, useEffect, useState } from 'react'

import { useAnnualNetIncome, useBudget, useMonthlyPurchases } from '../hooks'

import Select from '../components/select'

import { roundTwo } from '../utils'


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

  const annualNetIncome: number = useAnnualNetIncome({})
  const monthlyNetIncome: number = roundTwo(annualNetIncome / 12)

  const totalBudget: number = useBudget({})
  const totalFoodDrinkBudget: number = useBudget({filter:'foodDrink', filterType:'category'})

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: selectedMonth + 1, year: selectedYear + 2020})
  const totalMonthlyFoodDrinkPurchases: number = useMonthlyPurchases({month:selectedMonth + 1, year: selectedYear + 2020, filter:'foodDrink', filterType:'category'})

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

      <h2>Fixed Items</h2>
      <div>
        <p>Annual Net Income: {annualNetIncome}</p>
        <p>Monthly Net Income: {monthlyNetIncome}</p>
        <p>Monthly Budget: {totalBudget}</p>
      </div>

      <h2>Monthly Items</h2>
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

      <div>
        <p>Monthly Purchases: {totalMonthlyPurchases}</p>
        <div>
          <h3>Food/Drink</h3>
          <p>
            Monthly Food/Drink Purchases: ${totalMonthlyFoodDrinkPurchases} out of ${totalFoodDrinkBudget}
          </p>
          <p>{roundTwo(100 - totalMonthlyFoodDrinkPurchases / totalFoodDrinkBudget * 100)}% remaining</p>
        </div>
      </div>
    </div>
  )
}

export default Index
