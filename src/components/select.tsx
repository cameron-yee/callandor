import React, { Dispatch, FormEvent, SetStateAction } from 'react'

type SelectProps = {
  options: string[],
  setValue: (Dispatch<SetStateAction<string>>) | ((value: string) => void),
  value: string
}
const Select = ({
  options,
  setValue,
  value
}: SelectProps) => {
  console.log(options)

  return (
    <select onChange={(e: FormEvent) => setValue((e.target as HTMLSelectElement).value)} value={value}>
      {options.map((option: string) => {
        return (
          <option key={`${option.toLowerCase().replace('/\s/g', '-')}`} value={option}>{option}</option>
        )
      })}
    </select>
  )
}

export default Select
