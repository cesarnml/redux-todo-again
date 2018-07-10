import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from '../components/Todo'

class TodoList extends Component {
  render () {
    console.log('IN TODO_LIST', this.props.todos)
    return (
      <div>
        {this.props.todos.map((todo) => <Todo key={todo.value} todo={todo} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}
export default connect(mapStateToProps)(TodoList)
