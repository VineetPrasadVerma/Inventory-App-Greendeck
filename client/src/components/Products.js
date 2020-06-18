import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductDetails from './ProductDetails'

const Products = ({ handleError }) => {
  // consuming the product context
  const { products } = useContext(ProductContext)

  return (
    <div className='row'>
      {products.length ? (
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
      ) : (
        <div id='message'>No Product Found</div>
      )}
    </div>
  )
}

export default Products
