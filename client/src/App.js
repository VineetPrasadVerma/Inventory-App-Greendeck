import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import ProductContextProvider from './context/ProductContext'
import Products from './components/Products'

function App () {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const showError = (message) => {
    setMessage(message)
    setError(true)
  }

  const filters = [{ id: 0, name: 'Discount %' },
    { id: 1, name: 'Brand' },
    { id: 2, name: 'Available' },
    { id: 3, name: 'Created' }
  ]
  return (
    <div className='App container'>
      <Sidebar filters={filters} />
      <ProductContextProvider handleError={message => showError(message)}>
        <Products handleError={message => showError(message)} />
      </ProductContextProvider>

    </div>
  )
}

export default App
