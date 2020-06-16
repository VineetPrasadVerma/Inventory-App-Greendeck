import React from 'react'
import Filter from './Filter'

export const Sidebar = ({ filters }) => {
  return (
    <div className='sidebar'>
      <h4>Filters</h4>
      {filters.map(filter => {
        return (<Filter filter={filter} key={filter.id} />)
      })}

    </div>
  )
}
