import { connect } from 'react-redux';
import LoginView from '../components/Login';

import { changeLoginEmail, changeLoginPassword, submitLogin } from '../actions';

// Email, password,
// Name, Email, password, batch

const mapStateToProps = (state) => {
  const { email, password } = state.login;
  return {
    email,
    password,
  }
}

const Login = connect(mapStateToProps, {
  changeEmail: changeLoginEmail,
  changePassword: changeLoginPassword,
  submitLogin,
})(LoginView);

export default Login;
