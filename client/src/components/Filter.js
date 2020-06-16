import React, { useState } from 'react'
import NumericFilter from './FilterType/NumericFilter'
import TextFilter from './FilterType/TextFilter'
import BooleanFilter from './FilterType/BooleanFilter'
import DateFilter from './FilterType/DateFilter'

const Filter = ({ filter }) => {
  const [showFilterInput, setShowFilterInput] = useState(false)
  // const [filterType, setFilterType] = useState(filter.type)
  let filterFields
  if (filter.type === 'numeric') {
    filterFields = <NumericFilter />
  } else if (filter.type === 'text') {
    filterFields = <TextFilter />
  } else if (filter.type === 'boolean') {
    filterFields = <BooleanFilter />
  } else if (filter.type === 'date') {
    filterFields = <DateFilter />
  }

  return (
    <div className='filter' onClick={() => setShowFilterInput(!showFilterInput)}>
      {filter.name}

      {showFilterInput ? (filterFields) : ('')}
    </div>
  )
}

export default Filter
