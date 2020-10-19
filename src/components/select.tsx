import React, { Dispatch, FormEvent, SetStateAction } from 'react'

import { formatClassList, joinStrings } from '../utils'


const SELECT: string = `
  font-secondary
  p-2
  text-lg
`

type SelectProps = {
  className?: string,
  options: string[],
  setValue: (Dispatch<SetStateAction<string>>) | ((value: string) => void),
  value: string
}

const Select = ({
  className,
  options,
  setValue,
  value
}: SelectProps) => {
  const formattedSelect: string = formatClassList(
    className
      ? joinStrings(' ', SELECT, className)
      : SELECT
  )

  return (
    <select
      className={formattedSelect}
      onChange={(e: FormEvent) => setValue((e.target as HTMLSelectElement).value)}
      value={value}
    >
      {options.map((option: string) => {
        return (
          <option key={`${option.toLowerCase().replace('/\s/g', '-')}`} value={option}>{option}</option>
        )
      })}
    </select>
  )
}

export default Select
