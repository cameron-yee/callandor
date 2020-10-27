import { Category } from './types'

export const CATEGORIES: Category[] = [
  {
    name: 'foodDrink',
    subCategories: [
      { name: 'coffee' },
      { name: 'groceries' }
    ]
  },
  {
    name: 'gifts',
    subCategories: []
  },
  {
    name: 'income',
    subCategories: []
  },
  {
    name: 'livingExpenses',
    subCategories: [
      { name: 'gas' },
      { name: 'monthlyBills' },
      { name: 'phone' },
      { name: 'rent' }
    ]
  },
  {
    name: 'medical',
    subCategories: []
  },
  {
    name: 'social',
    subCategories: [
      { name: 'gas' }
    ]
  },
  {
    name: 'subscriptions',
    subCategories: []
  },
  {
    name: 'transferIn',
    subCategories: [
      { name: 'interest' }
    ]
  },
  {
    name: 'transferOut',
    subCategories: [
      { name: 'saving' },
      { name: 'giving' }
    ]
  },
  {
    name: 'travel',
    subCategories: []
  }
]

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const YEARS: string[] = [
  '2020',
  '2021'
]
