import React from 'react'

const BooleanFilter = ({ filter, boolean, setBoolean }) => {
  return (
    <div>
      <h4>{filter.name}</h4>
      <input
        type='radio'
        name='stock_available'
        value={boolean}
        onClick={(e) => setBoolean(true)}
      />{' '}
      In Stock
      <div />
      <input
        type='radio'
        name='stock_available'
        value={boolean}
        onClick={(e) => setBoolean(false)}
      />{' '}
      Out of stock
      <div />
      <input
        type='radio'
        name='stock_available'
        checked={boolean === ''}
        onChange={(e) => setBoolean('')}
      />{' '}
      All
    </div>
  )
}

export default BooleanFilter
