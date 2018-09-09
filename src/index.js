import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import todoApp from './reducers'
import Router from './Router'
import './style/index.scss';

const store = createStore(
  todoApp,
  applyMiddleware(thunk)
)

render(
  <Router store={store} />,
  document.getElementById('root')
)
