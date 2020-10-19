import React from 'react'

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

  const formattedWrapper: string = formatClassList(WRAPPER)

  return (
    <div className={formattedWrapper}>
      <h3>{filter}</h3>
      <Remaining filter={filter} filterType={filterType} month={month} year={year} />
      {currentMonth + 1 === month &&
        <Pace filter={filter} filterType={filterType} />
      }
    </div>
  )
}

export default DashboardCategory
