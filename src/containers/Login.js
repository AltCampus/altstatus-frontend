import { connect } from 'react-redux';
import LoginView from '../components/Login';

import { changeLoginEmail, changeLoginPassword, submitLogin } from '../actions';

const mapStateToProps = (state) => {
  const { email, password, loading, error, } = state.login;
  return {
    email,
    password,
    loading,
    error,
  }
}

const Login = connect(mapStateToProps, {
  changeEmail: changeLoginEmail,
  changePassword: changeLoginPassword,
  submitLogin,
})(LoginView);

export default Login;
