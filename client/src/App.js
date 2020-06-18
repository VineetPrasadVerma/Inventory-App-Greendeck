import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import ProductContextProvider from './context/ProductContext'
import Products from './components/Products'
import Error from './components/Error'

function App () {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const showError = (message) => {
    setMessage(message)
    setError(true)
  }

  return !error ? (
    <div className='App container'>
      <ProductContextProvider handleError={(message) => showError(message)}>
        <Sidebar handleError={(message) => showError(message)} />
        <Products handleError={(message) => showError(message)} />
      </ProductContextProvider>
    </div>
  ) : (
    <Error message={message} />
  )
}

export default App
