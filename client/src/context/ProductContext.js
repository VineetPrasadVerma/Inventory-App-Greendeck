import React, { createContext, useReducer, useEffect } from 'react'
import { productReducer } from '../reducers/ProductReducer'
import axios from 'axios'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(productReducer, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5500/')
        dispatch({ type: 'GET_PRODUCTS', products: res.data })
      } catch (err) {
        props.handleError('Can\'t get Products')
      }
    }

    fetchProducts()
  }, [])

  // console.log(products)
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
