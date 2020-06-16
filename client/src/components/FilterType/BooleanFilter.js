import React, { useState } from 'react'

const BooleanFilter = () => {
  return (
    <div onClick={(e) => { e.stopPropagation() }}>
      <input type='radio' value='true' name='stock' /> In Stock
      <div />
      <input type='radio' value='false' name='stock' /> Out of stock
    </div>
  )
}

export default BooleanFilter
