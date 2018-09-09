import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Router from './Router'

const store = createStore(todoApp)

render(
  <Router store={store} />,
  document.getElementById('root')
)
