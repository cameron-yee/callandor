import React from 'react'

import Remaining from './remaining'
import Pace from './pace'
import Purchases from './purchases'

const DashboardCategory = ({
  filter,
  filterType,
  month,
  year
}) => {
  const date: Date = new Date()
  const currentMonth: number = date.getMonth()

  return (
    <div>
      <h4>{filter}</h4>
      <Purchases filter={filter} filterType={filterType} month={month} year={year} />
      <Remaining filter={filter} filterType={filterType} month={month} year={year} />
      {currentMonth + 1 === month &&
        <Pace filter={filter} filterType={filterType} />
      }
    </div>
  )
}

export default DashboardCategory
