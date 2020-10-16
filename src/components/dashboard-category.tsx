import React from 'react'

import { formatClassList } from '../utils'

import Remaining from './remaining'
import Pace from './pace'
import Purchases from './purchases'

const HEADER: string = `
  my-3
  text-xl
  tracking-widest
  font-main
  font-semibold
  text-gray-200
`

const DashboardCategory = ({
  filter,
  filterType,
  month,
  year
}) => {
  const date: Date = new Date()
  const currentMonth: number = date.getMonth()

  const formattedHeader: string = formatClassList(HEADER)

  return (
    <div className='bg-gray-700 rounded p-4 mt-3'>
      <h4 className={formattedHeader}>{filter}</h4>
      <Purchases filter={filter} filterType={filterType} month={month} year={year} />
      <Remaining filter={filter} filterType={filterType} month={month} year={year} />
      {currentMonth + 1 === month &&
        <Pace filter={filter} filterType={filterType} />
      }
    </div>
  )
}

export default DashboardCategory
