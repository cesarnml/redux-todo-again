import React from 'react'
import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import {
  setVisibilityFilter,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../actions'

const TodoFilterContainer = ({ setVisibilityFilter }) => {
  const visibility = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]
  return (
    <div>
      {visibility.map((filter, index) => (
        <TodoFilter
          key={index}
          filter={filter}
          handleClick={setVisibilityFilter}
        >
          {filter.split('_').pop()}
        </TodoFilter>
      ))}
    </div>
  )
}

export default connect(null, {
  setVisibilityFilter
})(TodoFilterContainer)
