import React from 'react'

import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'

import './App.css'

const App = (props) => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
