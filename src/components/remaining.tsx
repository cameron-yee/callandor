import React from 'react'
import { useBudget, useMonthlyPurchases } from '../hooks'

import { formatClassList, joinStrings } from '../utils'

const CHART: string = `
  bg-blue-900
  h-5
  mt-2
  w-full
`

const TEXT: string = `
  font-secondary
  ml-auto
  text-sm
  tracking-wider
`

const LABEL: string = `
  font-secondary
  ml-auto
  mt-1
  text-xs
  tracking-wider
  text-gray-300
`

const OVER: string = `
  text-red-500
`

const OVER_BG: string = `
  bg-red-500
  h-5
`

const UNDER: string = `
  text-green-500
`

const UNDER_BG: string = `
  bg-green-500
  h-5
`

const CLOSE: string = `
  text-orange-500
`

const CLOSE_BG: string = `
  bg-orange-500
  h-5
`

const WRAPPER: string = `
  flex
  flex-wrap
  mt-2
  w-full
`

type RemainingProps = {
  filter?: string,
  filterType?: 'category' | 'subCategory'
  month: number,
  year: number
}

const Remaining = ({
  filter,
  filterType,
  month,
  year
}: RemainingProps) => {
  const formattedLabel: string = formatClassList(LABEL)

  const totalBudget: number = useBudget({filter: filter, filterType: filterType})
  const totalMonthlyPurchases: number = useMonthlyPurchases({month:month, year: year, filter: filter, filterType: filterType})
  const totalRemainingPercentage: number = 100 - (totalMonthlyPurchases / totalBudget) * 100
  const totalRemaining: number = totalBudget - totalMonthlyPurchases

  const formattedChart: string = formatClassList(CHART)
  const formattedWrapper: string = formatClassList(WRAPPER)

  const formattedRemaining = totalRemainingPercentage < 0
    ? formatClassList(joinStrings(' ', TEXT, OVER))
    : totalRemainingPercentage < 15
      ? formatClassList(joinStrings(' ', TEXT, CLOSE))
      : formatClassList(joinStrings(' ', TEXT, UNDER))

  const formattedRemainingBg = totalRemainingPercentage < 0
    ? formatClassList(OVER_BG)
    : totalRemainingPercentage < 15
      ? formatClassList(CLOSE_BG)
      : formatClassList(UNDER_BG)

  return (
    <div className={formattedWrapper}>
      {totalRemaining >= 0 &&
        <p>Budget remaining: ${totalRemaining.toFixed(2)} remaining</p>
      }
      {totalRemaining < 0 &&
        <p>OVER BUDGET BY ${totalRemaining.toFixed(2)}</p>
      }
      <div className={formattedChart}>
        <div className={formattedRemainingBg} style={{ width: `${totalRemainingPercentage}%`}} />
      </div>
      <p className={formattedLabel}><span className={formattedRemaining}>{totalRemainingPercentage.toFixed(2)}%</span> remaining</p>
    </div>
  )
}

export default Remaining
