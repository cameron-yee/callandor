import React, { useEffect, useState } from 'react'

import { MONTHS, YEARS } from '../constants'
import { formatClassList } from '../utils'

import DashboardCategory from './dashboard-category'
import FixedItems from './fixed-items'
import Purchases from './purchases'
import Recurring from './recurring'
import Remaining from './remaining'
import Select from './select'
import YearLook from './year-look'


const ITEM: string = `
  bg-gray-900
  mt-3
  p-3
  rounded
  shadow
  w-full
`

const CONTAINER: string = `
  flex
  mt-3
  w-full
`

const ROUNDED_L: string = `
  rounded-l
`

const ROUNDED_R: string = `
  rounded-r
`

const SEPARATOR: string = `
  border-pink-400
  border-t-2
  mt-5
  mb-3
  w-full
`

const WRAPPER: string = `
  flex
  flex-wrap
`

type DashboardProps = {
  categories?: string[],
  recurring?: boolean,
  subCategories?: string[],
  yearLook?: boolean,
  fixedItems?: boolean
}

const Dashboard = ({
  categories,
  recurring=false,
  subCategories,
  yearLook,
  fixedItems
}: DashboardProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(0)
  const [selectedYear, setSelectedYear] = useState<number>(0)

  const date: Date = new Date()
  const fullYear: number = date.getFullYear()

  const currentMonth: number = date.getMonth()
  const currentYear: number = fullYear - 2020

  const formattedContainer: string = formatClassList(CONTAINER)
  const formattedItem: string = formatClassList(ITEM)
  const formattedRoundedL: string = formatClassList(ROUNDED_L)
  const formattedRoundedR: string = formatClassList(ROUNDED_R)
  const formattedSeparator: string = formatClassList(SEPARATOR)
  const formattedWrapper: string = formatClassList(WRAPPER)


  useEffect(() => {
    setSelectedMonth(currentMonth)
    setSelectedYear(currentYear)
  }, [])

  return (
    <div className={formattedWrapper}>
      <h1>{MONTHS[selectedMonth]}, {YEARS[selectedYear]} Dashboard</h1>

      <div className={formattedContainer}>
        <Select
          className={formattedRoundedL}
          options={MONTHS}
          value={MONTHS[selectedMonth]}
          setValue={(value: string) => setSelectedMonth(MONTHS.indexOf(value))}
        />
        <Select
          className={formattedRoundedR}
          options={YEARS}
          value={YEARS[selectedYear]}
          setValue={(value: string) => setSelectedYear(YEARS.indexOf(value))}
        />
      </div>

      <div className={formattedSeparator} />

      {fixedItems &&
        <FixedItems recurring={recurring} />
      }
      {recurring &&
        <Recurring />
      }
      <div className={formattedItem}>
        <h2>{MONTHS[selectedMonth]} Items</h2>
        <Purchases month={selectedMonth + 1} year={selectedYear + 2020} recurring={recurring} />
        <Remaining month={selectedMonth + 1} year={selectedYear + 2020} recurring={recurring} />
      </div>
      {(categories || subCategories) &&
        <div className={formattedItem}>
          <h2>Categories/Sub-Categories</h2>
          {categories &&
            categories.map((name: string, index: number) => {
              return (
                <DashboardCategory
                  key={`category-${index}`}
                  filter={name}
                  filterType='category'
                  month={selectedMonth + 1}
                  year={selectedYear + 2020}
                />
              )
            })
          }
          {subCategories &&
            subCategories.map((name: string, index: number) => {
              return (
                <DashboardCategory
                  key={`sub-category-${index}`}
                  filter={name}
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
        <div className={formattedItem}>
          <YearLook year={selectedYear + 2020} recurring={recurring} />
        </div>
      }
    </div>
  )
}

export default Dashboard
