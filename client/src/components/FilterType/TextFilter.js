import React, { useState } from 'react'

const TextFilter = ({ filter, text, setText }) => {
  return (
    <div style={{ margin: '10px' }}>
      <h4>{filter.name}</h4>

      <input
        type='text'
        autoFocus
        value={text}
        placeholder='Search brand'
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
    </div>
  )
}

export default TextFilter
