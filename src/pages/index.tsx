import React, { FormEvent, useEffect, useState } from 'react'

import { MONTHS, YEARS } from '../constants'

import { useAnnualNetIncome, useBudget, useMonthlyPurchases } from '../hooks'

import Select from '../components/select'
import YearLook from '../components/year-look'

import { roundTwo } from '../utils'


const Index = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedYear, setSelectedYear] = useState<number>(0)

  const annualNetIncome: number = useAnnualNetIncome({})
  const monthlyNetIncome: number = roundTwo(annualNetIncome / 12)

  const totalBudget: number = useBudget({})
  const totalGroceriesBudget: number = useBudget({filter:'groceries', filterType:'subCategory'})
  const totalCoffeeBudget: number = useBudget({filter:'coffee', filterType:'subCategory'})
  const totalSocialBudget: number = useBudget({filter:'social', filterType:'category'})

  const totalMonthlyPurchases: number = useMonthlyPurchases({month: selectedMonth + 1, year: selectedYear + 2020})
  const totalMonthlyGroceriesPurchases: number = useMonthlyPurchases({month:selectedMonth + 1, year: selectedYear + 2020, filter:'groceries', filterType:'subCategory'})
  const totalMonthlyCoffeePurchases: number = useMonthlyPurchases({month:selectedMonth + 1, year: selectedYear + 2020, filter:'coffee', filterType:'subCategory'})
  const totalMonthlySocialPurchases: number = useMonthlyPurchases({month:selectedMonth + 1, year: selectedYear + 2020, filter:'social', filterType:'category'})

  const date: Date = new Date()
  const fullYear: number = date.getFullYear()

  const currentDay: number = date.getDate()
  const currentMonth: number = date.getMonth()
  const currentYear: number = fullYear - 2020

  const daysInMonth: number = new Date(fullYear, currentMonth + 1, 0).getDate()

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

      <h2>Fixed Items</h2>
      <div>
        <p>Annual Net Income: {annualNetIncome}</p>
        <p>Monthly Net Income: {monthlyNetIncome}</p>
        <p>Monthly Budget: {totalBudget}</p>
      </div>

      <h2>{MONTHS[selectedMonth]} Items</h2>
      <div>
        <p>Total Purchases: {totalMonthlyPurchases}</p>

        <h3>Categories/Sub-Categories</h3>
        {/*<Dashboard categories={['social']} subCategories={['groceries', 'coffee']} yearLook={true} fixeditems={true} />*/}
        {/*<DashboardCategory filter='groceries' filterType='foodDrink' />*/}
        <div>
          <h4>Groceries</h4>
          <p>Purchases: ${totalMonthlyGroceriesPurchases} out of ${totalGroceriesBudget}</p>
          <p>{roundTwo(100 - totalMonthlyGroceriesPurchases / totalGroceriesBudget * 100)}% remaining</p>
          {/*<Remaining filter='groceries' filterType='foodDrink' />*/}
          <p>On pace to spend: ${roundTwo(totalMonthlyGroceriesPurchases / currentDay * daysInMonth)}</p>
          {/*<Pace filter='groceries' filterType='foodDrink' />*/}
        </div>
        <div>
          <h4>Coffee</h4>
          <p>Purchases: ${totalMonthlyCoffeePurchases} out of ${totalCoffeeBudget}</p>
          <p>{roundTwo(100 - totalMonthlyCoffeePurchases / totalCoffeeBudget * 100)}% remaining</p>
          <p>On pace to spend: ${roundTwo(totalMonthlyCoffeePurchases / currentDay * daysInMonth)}</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Purchases: ${totalMonthlySocialPurchases} out of ${totalSocialBudget}</p>
          <p>{roundTwo(100 - totalMonthlySocialPurchases / totalSocialBudget * 100)}% remaining</p>
          <p>On pace to spend: ${roundTwo(totalMonthlySocialPurchases / currentDay * daysInMonth)}</p>
        </div>
      </div>

      <h2>{selectedYear + 2020} Look (+/- Budget)</h2>
      <div>
        <YearLook year={selectedYear + 2020} />
      </div>
    </div>
  )
}

export default Index
