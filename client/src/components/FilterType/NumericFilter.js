import React from 'react'

const NumericFilter = ({ filter, number, setNumber, otherNumber, setOtherNumber, operator, setOperator }) => {
  return (
    <div style={{ margin: '10px' }}>
      <h4>{filter.name}</h4>
      <select
        value={operator} onChange={(event) => {
          setOperator(event.target.value)
        }}
      >
        <option value='<'>Less than</option>
        <option value='>'>Greater than</option>
        <option value='==='>Equals</option>
        <option value='between'>between</option>
      </select>
      {operator === 'between' ? (
        <div>
          <input
            type='number'
            autoFocus
            value={number}
            placeholder='Start Value'
            onChange={(event) => {
              setNumber(event.target.value)
            }}
          />
          <input
            type='number'
            autoFocus
            value={otherNumber}
            placeholder='End Value'
            onChange={(event) => {
              setOtherNumber(event.target.value)
            }}
          />
        </div>
      ) : (
        <input
          type='number'
          autoFocus
          value={number}
          placeholder='Discount Range'
          onChange={(event) => {
            setNumber(event.target.value)
          }}
        />

      )}
    </div>
  )
}

export default NumericFilter
