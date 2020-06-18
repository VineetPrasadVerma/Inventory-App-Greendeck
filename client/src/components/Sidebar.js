import React from 'react'
import Filter from './Filter'

export const Sidebar = ({ handleError }) => {
  const filters = [
    { id: 0, name: 'Discount %', type: 'numeric' },
    { id: 1, name: 'Brand', type: 'text' },
    { id: 2, name: 'Availability', type: 'boolean' },
    { id: 3, name: 'Added Between', type: 'date' }
  ]

  return (
    <div className='well col-md-3 col-sm-4 col-xs-6 sidebar'>
      <h4>Filters</h4>
      <hr />
      <Filter filters={filters} handleError={handleError} />
    </div>
  )
}
