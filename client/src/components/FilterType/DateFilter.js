import React from 'react'

const DateFilter = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div style={{ margin: '10px' }}>
      <h4>Added On</h4>
      <input
        type='date' value={startDate}
        onChange={(event) => {
          setStartDate(event.target.value)
        }}
      />
      <input
        type='date' value={endDate}
        onChange={(event) => {
          setEndDate(event.target.value)
        }}
      />
    </div>
  )
}

export default DateFilter
