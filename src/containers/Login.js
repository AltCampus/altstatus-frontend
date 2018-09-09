import { connect } from 'react-redux';
import LoginView from '../components/Login';

import { changeLoginEmail, changeLoginPassword } from '../actions';

// Email, password,
// Name, Email, password, batch

const mapStateToProps = (state) => {
  const { email, password } = state.login;

  return {
    email,
    password,
  }
}

const LoginView = connect(mapStateToProps, {
  changeLoginEmail,
  changeLoginPassword,
})
