import React from 'react'
import { connect } from 'react-redux'

import {
  setVisibilityFilter,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../actions'

const TodoFilter = (props) => {
  return (
    <div>
      <button onClick={() => props.setVisibilityFilter(SHOW_ALL)}>All</button>
      <button onClick={() => props.setVisibilityFilter(SHOW_COMPLETED)}>
        Completed
      </button>
      <button onClick={() => props.setVisibilityFilter(SHOW_ACTIVE)}>
        Active
      </button>
    </div>
  )
}

export default connect(null, {
  setVisibilityFilter
})(TodoFilter)
