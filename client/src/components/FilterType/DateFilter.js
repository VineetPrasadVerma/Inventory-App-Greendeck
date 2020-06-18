import React from 'react'

// Generic filter - can be applied for date.
const DateFilter = ({
  filter,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  return (
    <div>

      <h4>{filter.name}</h4>

      <input
        type='date'
        placeholder='start Date'
        value={startDate}
        onChange={(event) => {
          setStartDate(event.target.value)
        }}
      />

      <input
        type='date'
        placeholder='End Date'
        value={endDate}
        onChange={(event) => {
          setEndDate(event.target.value)
        }}
      />

    </div>
  )
}

export default DateFilter
