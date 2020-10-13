import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Income } from '../types'

type Edge = {
  node: Income
}

type AllIncomesJson = {
  edges: Edge[]
}
type Data = {
  allIncomesJson: AllIncomesJson
}

const getAnnualNetIncome = (incomes: Edge[]): number => {
    let annualNetIncome = 0
    for (let i: number = 0; i < incomes.length; i++) {
      annualNetIncome += incomes[i].node.payPeriodNetIncome * incomes[i].node.payPeriodsPerYear
    }

    return annualNetIncome
}

const MonthlyNetIncome = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allIncomesJson {
        edges {
          node {
            name
            payPeriodNetIncome
            payPeriodsPerYear
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>{Math.round((getAnnualNetIncome(data.allIncomesJson.edges) / 12 + Number.EPSILON) * 100 / 100)}</React.Fragment>
  )
}

export default MonthlyNetIncome

