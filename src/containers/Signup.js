import { connect } from 'react-redux';
import SignupView from '../components/SignupForm';

import {
  changeSignupEmail,
  changeSignupName,
  changeSignupPassword,
  changeSignupBatch,
  changeSignupConfirmPassword,
  submitSignup
} from '../actions';

const mapStateToProps = (state) => {
  const { email, password, name, batch, confirmPassword, loading, error, } = state.signup;

  return {
    name,
    email,
    password,
    batch,
    confirmPassword,
    error,
    loading,
  }
}

const Signup = connect(mapStateToProps, {
  changeEmail: changeSignupEmail,
  changeName: changeSignupName,
  changePassword: changeSignupPassword,
  changeBatch: changeSignupBatch,
  changeConfirmPassword: changeSignupConfirmPassword,
  submitSignup,
})(SignupView);

export default Signup;
