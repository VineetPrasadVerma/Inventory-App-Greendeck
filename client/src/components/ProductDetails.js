import React from 'react'
import ProductImage from '../img/product.webp'

const ProductDetails = ({ product }) => {
  return (
    <div className='column col-md-4 col-sm-6'>
      <div className='thumbnail'>
        <img alt='product_image' src={product.media.standard[0].url} />

        <strong className='caption' style={{ textTransform: 'uppercase' }}>
          {product.brand.name}
        </strong>

        <div className='caption'>
          &#8364; {product.price.offer_price.value}{' '}
          <span id='regularPrice'>
            &#8364;{product.price.regular_price.value}
          </span>
        </div>

        <p className='caption' style={{ fontStyle: 'italic' }}>
          {product.price_positioning_text}
        </p>

      </div>
    </div>
  )
}

export default ProductDetails
