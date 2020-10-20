import React from 'react'

import { useBudget } from '../hooks'

import { formatClassList } from '../utils'


import Remaining from './remaining'
import Pace from './pace'

const WRAPPER: string = `
  bg-gray-700
  mt-3
  p-4
  rounded
`

type DashboardCategoryProps = {
  filter: string,
  filterType: 'category' | 'subCategory',
  month: number,
  year: number
}

const DashboardCategory = ({
  filter,
  filterType,
  month,
  year
}: DashboardCategoryProps) => {
  const date: Date = new Date()
  const currentMonth: number = date.getMonth()

  const budget: number = useBudget({ filter: filter, filterType: filterType })

  const formattedWrapper: string = formatClassList(WRAPPER)

  return (
    <div className={formattedWrapper}>
      <h3>{filter}</h3>
      <p>Budget: ${budget.toFixed(2)}</p>
      <Remaining filter={filter} filterType={filterType} month={month} year={year} />
      {currentMonth + 1 === month &&
        <Pace filter={filter} filterType={filterType} />
      }
    </div>
  )
}

export default DashboardCategory
