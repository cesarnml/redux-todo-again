import React from 'react'

const TodoForm = ({
  name,
  type,
  placeholder,
  handleSubmit,
  handleChange,
  value
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
