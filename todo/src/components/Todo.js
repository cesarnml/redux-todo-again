import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo, toggleTodo } from '../actions'

import './Todo.css'

const Todo = (props) => {
  console.log('in Todo', props)

  return (
    <div>
      <li
        className={props.todo.completed ? 'completedTodo' : 'activeTodo'}
        onClick={() => {
          props.toggleTodo(props.todo.id)
        }}
      >
        {props.todo.value}
      </li>
      <button onClick={() => props.deleteTodo(props.todo.id)}>X</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos.todos }
}

export default connect(mapStateToProps, { deleteTodo, toggleTodo })(Todo)
