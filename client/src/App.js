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

  return (
    <div className='App container'>
      <ProductContextProvider handleError={message => showError(message)}>
        <Sidebar handleError={message => showError(message)} />
        <Products handleError={message => showError(message)} />
      </ProductContextProvider>

    </div>
  )
}

export default App
