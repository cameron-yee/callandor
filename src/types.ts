export type SubCategory = {
  name: string
}

export type Category = {
  name: string,
  subCategories: SubCategory[]
}

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

export type Frequency =
 | 'monthly'
 | 'yearly'

export type RecurringItem = {
  amount: number,
  category: Category,
  frequency: Frequency,
  notes: string,
  subCategory: SubCategory
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

export type CategoryFilterType =
  | 'category'
  | 'subCategory'
  | '-----'

export type IncomeFilterType =
	| 'name'

