import React from 'react'

const TextFilter = ({ filter, text, setText }) => {
  return (
    <div>
      <h4>{filter.name}</h4>
      <input
        type='text'
        autoFocus
        value={text}
        placeholder='Brand name'
        onChange={(event) => {
          setText(event.target.value)
        }}
      />
    </div>
  )
}

export default TextFilter
