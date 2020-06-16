import React, { useState } from 'react'

const DateFilter = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  return (
    <div onClick={(e) => e.stopPropagation()}>
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
