import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm from '../components/TodoForm'

class TodoFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { todo } = this.state
    this.props.addTodo(todo)
    this.setState({ todo: '' })
  }

  render () {
    const { todo } = this.state
    return (
      <TodoForm
        name='todo'
        type='text'
        placeholder='Add a todo'
        value={todo}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default connect(null, { addTodo })(TodoFormContainer)
