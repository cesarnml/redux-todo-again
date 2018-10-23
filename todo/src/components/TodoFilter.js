import React from 'react'

const TodoFilter = ({ filter, handleClick, children }) => {
  return (
    <button onClick={() => handleClick(filter)}>
      {children}
    </button>
  )
}

export default TodoFilter
