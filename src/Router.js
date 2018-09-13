import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'
import Signup from './containers/Signup';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

const checkIfLogin = () => {
  const userInfo = localStorage.getItem('userInfo');

  return userInfo
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={
          () => (
            checkIfLogin() ? <Redirect to={'/dashboard'} /> : <App />
          )}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route
          path="/dashboard"
          render={
            () => (
              checkIfLogin() ? <Dashboard /> : <Redirect to={'/'} />
            )
          }
        />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
