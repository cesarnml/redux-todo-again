import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  deleteTodo,
  toggleTodo
} from '../actions'

import Todo from '../components/Todo'

class TodoListContainer extends Component {
  visibleTodos = (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      default:
        return console.log('something went wrong')
    }
  }

  render () {
    const { todos } = this.props
    const { visibilityFilter, deleteTodo, toggleTodo } = this.props
    const visibleTodos = this.visibleTodos(todos, visibilityFilter)
    return (
      <div>
        {visibleTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => {
  return { visibilityFilter, todos }
}
export default connect(mapStateToProps, { toggleTodo, deleteTodo })(
  TodoListContainer
)
