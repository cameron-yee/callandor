import React from 'react'

import { CategoryFilterType, RecurringItem } from '../types'

import { formatClassList } from '../utils'
import { useRecurring } from '../hooks'

const BOLD: string = `
  font-bold
`

const DIVIDER: string = `
  border-t-2
  border-gray-700
  my-2
`

const WRAPPER: string = `
  bg-gray-900
  mt-3
  p-3
  rounded
  w-full
`

type Edge = {
  node: RecurringItem
}

type RecurringItemsPropTypes = {
  filter?: string,
  filterType?: CategoryFilterType | 'frequency'
}

const RecurringItems = ({
  filter,
  filterType
}: RecurringItemsPropTypes) => {
  const recurringItems: any = useRecurring({ filter, filterType })

  const formattedBold: string = formatClassList(BOLD)
  const formattedDivider: string = formatClassList(DIVIDER)
  const formattedFull: string = formatClassList(WRAPPER)

  return (
    <div className={formattedFull}>
      <h2>Recurring Items</h2>
      <div>
        {recurringItems.map((item: Edge, index: number) => {
          return (
            <div key={`recurring-${index}`}>
              <p>Category: <span className={formattedBold}>{item.node.category}</span></p>
              <p>SubCategory: <span className={formattedBold}>{item.node.subCategory}</span></p>
              <p>Budget: <span className={formattedBold}>${item.node.amount.toFixed(2)}</span></p>
              <p>Frequency: <span className={formattedBold}>{item.node.frequency}</span></p>
              <div className={formattedDivider} />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default RecurringItems
