import React, { useState } from 'react'

const NumericFilter = () => {
  const [number, setNumber] = useState(0)
  const [operator, setOperator] = useState('=')

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <input
        type='number'
        autoFocus
        value={number}
        placeholder='Discount Range'
        onChange={(event) => {
          setNumber(event.target.value)
        }}
      />

      <select
        value={operator} onChange={(event) => {
          setOperator(event.target.value)
        }}
      >
        <option value='<'>Less than</option>
        <option value='>'>Greater than</option>
        <option value='==='>Equals</option>
      </select>
    </div>
  )
}

export default NumericFilter
