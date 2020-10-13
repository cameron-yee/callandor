import React, { FormEvent, useEffect, useState } from 'react'

import { useAnnualNetIncome, useBudget, useMonthlyPurchases } from '../hooks'

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
        <p>Annual Net Income: {annualNetIncome}</p>
        <p>Monthly Net Income: {monthlyNetIncome}</p>
        <p>Monthly Budget: {totalBudget}</p>
        <p>Monthly Purchases: {totalMonthlyPurchases}</p>
        <p>
          Monthly Food/Drink Purchases: {totalMonthlyFoodDrinkPurchases} out of {totalFoodDrinkBudget}
        </p>
      </div>
    </div>
  )
}

export default Index
