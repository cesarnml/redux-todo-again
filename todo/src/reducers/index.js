import { combineReducers } from 'redux'
import todos from './reducer-todos'
import visibilityFilter from './reducer-visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
