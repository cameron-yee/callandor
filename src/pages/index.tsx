import React from 'react'

import Dashboard from '../components/dashboard'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <Dashboard
        categories={['social']}
        fixedItems={true}
        recurring={true}
        subCategories={['groceries', 'coffee']}
        yearLook={true}
      />
    </Layout>
  )
}

export default Index
