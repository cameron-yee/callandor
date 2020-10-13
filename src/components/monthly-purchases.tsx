import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Purchase, PurchaseFilterType } from '../types'

type Edge = {
  node: Purchase
}

type AllPurchasesJson = {
  edges: Edge[]
}

type Data = {
  allPurchasesJson: AllPurchasesJson
}

type MonthlyPurchasesAmountProps = {
  filter?: string,
  filterType?: PurchaseFilterType
  month: number,
  year: number
}

const getMonthlyPurchasesAmount = (
  edges: Edge[],
  month: number,
  year: number,
  filterType?: PurchaseFilterType,
  filter?: string
): number => {
    let monthlyPurchasesAmount: number = 0
    for (let i: number = 0; i < edges.length; i++) {
      const purchaseMonth: string = edges[i].node.date.split('/')[0]
      const purchaseYear: string = edges[i].node.date.split('/')[2]

      if (
        (!filterType || !filter)
        && purchaseMonth === month.toString()
        && purchaseYear === year.toString()
      ) {
        monthlyPurchasesAmount += edges[i].node.amount
        continue
      }

      if (
        filterType
        && edges[i].node[filterType] === filter
        && purchaseMonth === month.toString()
        && purchaseYear === (year).toString()
      ) {
        monthlyPurchasesAmount += edges[i].node.amount
        continue
      }
    }

    return monthlyPurchasesAmount
}

const MonthlyPurchasesAmount = ({
  filter,
  filterType,
  month,
  year
}: MonthlyPurchasesAmountProps) => {
  const data: Data = useStaticQuery(graphql`
    query {
      allPurchasesJson {
        edges {
          node {
            amount
            category
            date
            notes
            subCategory
          }
        }
      }
    }
  `)

  const amount: number = Math.round((getMonthlyPurchasesAmount(data.allPurchasesJson.edges, month, year, filterType, filter) + Number.EPSILON) * 100 / 100)

  return (
    <React.Fragment>{amount}</React.Fragment>
  )
}

export default MonthlyPurchasesAmount

