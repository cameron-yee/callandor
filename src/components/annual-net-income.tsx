import React, { useEffect, useState } from 'react'
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

const AnnualNetIncome = () => {
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
    <React.Fragment>{getAnnualNetIncome(data.allIncomesJson.edges)}</React.Fragment>
  )
}

export default AnnualNetIncome
