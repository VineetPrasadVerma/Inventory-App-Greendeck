import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductDetails from './ProductDetails'

const Products = ({ handleError }) => {
  // consuming the product context
  const { products } = useContext(ProductContext)
  console.log(products)

  return (
    <div className='row'>
      {products === null ? (
        <div id='message'>Loading...</div>
      ) : products.length === 0 ? (
        <div id='message'>No Product Found</div>
      ) : (
        <div className='container'>
          {products.map((product) => {
            return (
              <ProductDetails
                handleError={handleError}
                product={product}
                key={product.id.oid}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Products
