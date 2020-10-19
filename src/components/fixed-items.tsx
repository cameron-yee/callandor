import React from 'react'

import { formatClassList } from '../utils'
import { useAnnualNetIncome, useBudget } from '../hooks'

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

const SAME: string = `
  text-green-500
`

const DIFFERENT: string = `
  text-yellow-400
`

const FixedItems = () => {
  const annualNetIncome: number = useAnnualNetIncome({})
  const monthlyNetIncome: number = annualNetIncome / 12
  const totalBudget: number = useBudget({})

  const formattedBold: string = formatClassList(BOLD)
  const formattedDivider: string = formatClassList(DIVIDER)
  const formattedFull: string = formatClassList(WRAPPER)

  const formattedZeroCheck: string =
    (monthlyNetIncome - totalBudget).toFixed(2) === '0.00'
    || (monthlyNetIncome - totalBudget).toFixed(2) === '-0.00'
      ? formatClassList(SAME)
      : formatClassList(DIFFERENT)

  return (
    <div className={formattedFull}>
      <h2>Fixed Items</h2>
      <div>
        <p>Annual Net Income: <span className={formattedBold}>${annualNetIncome.toFixed(2)}</span></p>
        <p>Monthly Net Income: <span className={formattedBold}>${monthlyNetIncome.toFixed(2)}</span></p>
        <p>Monthly Budget: <span className={formattedBold}>${totalBudget.toFixed(2)}</span></p>
        <div className={formattedDivider} />
        <p>Zero Check: <span className={formattedZeroCheck}>${(monthlyNetIncome - totalBudget).toFixed(2)}</span></p>
      </div>

    </div>
  )
}

export default FixedItems
