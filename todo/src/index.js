import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './reducers'

import './index.css'

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log('STORE HAS CHANGED, state is: ', store.getState())
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
