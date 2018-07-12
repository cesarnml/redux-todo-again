export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

let counter = 2

export const addTodo = (text) => {
  const todo = {
    value: text,
    id: counter++,
    completed: false
  }
  return { type: ADD_TODO, payload: todo }
}

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id }
}

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, payload: filter }
}
