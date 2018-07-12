import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
  todos: [
    { value: 'learn redux', completed: false, id: 0 },
    { value: 'learn redux better', completed: false, id: 1 }
  ]
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [ ...state.todos, action.payload ] }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    default:
      return state
  }
}

export default todos
