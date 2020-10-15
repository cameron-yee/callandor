import React from 'react'

import Dashboard from '../components/dashboard'

const Index = () => {
  return (
    <Dashboard
      categories={['social']}
      fixedItems={true}
      subCategories={['groceries', 'coffee']}
      yearLook={true}
    />
  )
}

export default Index
