import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.todo)
    this.setState({ todo: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type='text'
            placeholder='Add a todo'
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addTodo })(TodoForm)
