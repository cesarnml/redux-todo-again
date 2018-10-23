import React from 'react'

import TodoFormContainer from '../containers/TodoFormContainer'
import TodoListContainer from '../containers/TodoListContainer'
import TodoFilterContainer from '../containers/TodoFilterContainer'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <TodoFormContainer />
      <TodoFilterContainer />
      <br />
      <TodoListContainer />
    </div>
  )
}

export default App
