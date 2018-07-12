import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions'

import Todo from '../components/Todo'

class TodoList extends Component {
  visibleTodos = (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed === true)
      case SHOW_ACTIVE:
        return todos.filter((todo) => todo.completed === false)
      default:
        return console.log('something went wrong')
    }
  }

  render () {
    console.log('in TodoList ', this.props.todos)
    return (
      <div>
        {this.visibleTodos(
          this.props.todos,
          this.props.filter
        ).map((todo, index) => <Todo key={todo.id} todo={todo} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.visibilityFilter }
}
export default connect(mapStateToProps)(TodoList)
