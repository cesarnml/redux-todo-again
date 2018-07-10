export const TODO_ADD = 'TODO_ADD'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_TOGGLE = 'TODO_TOGGLE'
export const TODOS_SHOW_ALL = 'TODOS_SHOW_ALL'
export const TODOS_SHOW_COMPLETED = 'TODOS_SHOW_COMPLETED'
export const TODOS_SHOW_ACTIVE = 'TODOS_SHOW_ACTIVE'

let counter = 2

export const addTodo = (newTodo) => {
  const todo = {
    value: newTodo,
    id: counter++,
    completed: false
  }
  return { type: TODO_ADD, payload: todo }
}

export const deleteTodo = (id) => {
  return { type: TODO_DELETE, payload: id }
}

export const toggleTodo = () => {
  return { type: TODO_TOGGLE }
}

export const showAllTodos = () => {
  return { type: TODOS_SHOW_ALL }
}

export const showCompletedTodos = () => {
  return { type: TODOS_SHOW_COMPLETED }
}

export const showActiveTodos = () => {
  return { type: TODOS_SHOW_ACTIVE }
}
