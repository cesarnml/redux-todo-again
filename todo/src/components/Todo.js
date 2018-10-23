import React from 'react'
import './Todo.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <li
        className={todo.completed ? 'completedTodo' : 'activeTodo'}
        onClick={() => {
          toggleTodo(todo.id)
        }}
      >
        {todo.value}
      </li>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  )
}

export default Todo
