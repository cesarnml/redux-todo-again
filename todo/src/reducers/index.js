import {
  TODO_ADD,
  TODO_DELETE,
  TODO_TOGGLE,
  TODOS_SHOW_ALL,
  TODOS_SHOW_COMPLETED,
  TODOS_SHOW_ACTIVE
} from '../actions'

const initialState = {
  todos: [
    { value: 'learn redux', completed: false, id: 0 },
    { value: 'learn redux better', completed: false, id: 1 }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      const { todos } = state
      todos.unshift(action.payload)
      console.log('IN REDUCER', todos)
      return Object.assign({}, state, { todos })

    case TODO_DELETE:
      return state
    case TODO_TOGGLE:
      return state
    case TODOS_SHOW_ALL:
      return state
    case TODOS_SHOW_COMPLETED:
      return state
    case TODOS_SHOW_ACTIVE:
      return state
    default:
      return state
  }
}