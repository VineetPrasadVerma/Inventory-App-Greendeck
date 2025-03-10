import React, { createContext, useReducer, useEffect } from 'react'
import { productReducer } from '../reducers/ProductReducer'
import axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(productReducer, null)

  useEffect(() => {
    // Get Products from DB and set in to state
    const fetchProducts = async () => {
      try {
        const res = await axios.get('products/')
        dispatch({ type: 'GET_PRODUCTS', products: res.data })
      } catch (err) {
        props.handleError("Can't get Products")
      }
    }

    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
