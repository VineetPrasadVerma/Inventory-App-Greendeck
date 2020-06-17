import React, { useState } from 'react'
import Filter from './Filter'

export const Sidebar = ({ handleError }) => {
  const filters = [{ id: 0, name: 'Discount %', type: 'numeric' },
    { id: 1, name: 'Brand', type: 'text' },
    { id: 2, name: 'Availability', type: 'boolean' },
    { id: 3, name: 'AddedOn', type: 'date' }
  ]

  return (
    <div className='sidebar'>
      <h4>Filters</h4>
      <Filter filters={filters} handleError={handleError} />
    </div>
  )
}
