export type Category =
  | 'foodDrink'
  | 'gifts'
  | 'income'
  | 'livingExpenses'
  | 'medical'
  | 'social'
  | 'subscriptions'
  | 'transferIn'
  | 'transferOut'
  | 'travel'

export type SubCategory =
  | 'coffee'
  | 'dates'
  | 'gas'
  | 'giving'
  | 'groceries'
  | 'interest'
  | 'monthlyBills'
  | 'phone'
  | 'savings'

export type Purchase = {
  date: string,
  amount: number,
  category: Category,
  subCategory: SubCategory,
  notes: string
}

export type BudgetItem = {
  category: Category,
  subCategory: SubCategory,
  monthlyBudget: number
}

export type Income = {
  name: string,
  payPeriodNetIncome: number,
  payPeriodsPerYear: number
}

export type PurchaseFilterType =
  | 'category'
  | 'date'
  | 'subCategory'
  | '-----'

export type BudgetFilterType =
  | 'category'
  | 'subCategory'
  | '-----'

export type IncomeFilterType =
	| 'name'

