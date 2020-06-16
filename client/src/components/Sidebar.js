import React from 'react'
import Filter from './Filter'

export const Sidebar = ({ filters }) => {
  return (
    <div className='sidebar'>
      {filters.map(filter => {
        return (<Filter name={filter.name} key={filter.id} />)
      })}

    </div>
  )
}
