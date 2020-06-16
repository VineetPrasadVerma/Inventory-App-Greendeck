import React from 'react'

const ProductDetails = ({ product }) => {
  return (
    <div className='column col-md-3 col-sm-6'>
      <div className='thumbnail'>
        <img
          alt='product_image'
          src={product.media.standard[0].url}
        />
        <span className='caption'>
          {product.brand.name}
        </span>
        <p>{product.price.regular_price.value}</p>
        <p id='temp'>{product.price.regular_price.value}</p>
      </div>
    </div>
  )
}

export default ProductDetails
