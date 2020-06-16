import React, { useState } from 'react'

const TextFilter = () => {
  const [text, setText] = useState('')
  return (
    <div onClick={(e) => e.stopPropagation()}>
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
