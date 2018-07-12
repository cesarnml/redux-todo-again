import React from 'react'

import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'
import TodoFilter from '../containers/TodoFilter'

import './App.css'

const App = (props) => {
  return (
    <div className='App'>
      <TodoForm />
      <TodoFilter />
      <br />
      <TodoList />
    </div>
  )
}

export default App
