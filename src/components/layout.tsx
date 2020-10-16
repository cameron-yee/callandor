import React, { ReactNode } from 'react'

import { formatClassList } from '../utils'

import 'fontsource-turret-road'
import 'fontsource-ubuntu'

import '../styles/tailwind.css'


const LAYOUT: string = `
  p-10
  bg-gray-800
`

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const formattedLayout: string = formatClassList(LAYOUT)

  return (
    <div className={formattedLayout}>
      {children}
    </div>
  )
}

export default Layout
