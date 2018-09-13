import { serverAPIBase } from '../config';
import {
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_BATCH,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_CONFIRM_PASSWORD,
  SET_SIGNUP_ERROR,
} from './types';

export const changeSignupName = (value) => {
  return {
    type: CHANGE_SIGNUP_NAME,
    value,
  };
};

export const changeSignupEmail = (value) => {
  return {
    type: CHANGE_SIGNUP_EMAIL,
    value,
  };
};

export const changeSignupPassword = (value) => {
  return {
    type: CHANGE_SIGNUP_PASSWORD,
    value,
  };
};

export const changeSignupBatch = (value) => {
  return {
    type: CHANGE_SIGNUP_BATCH,
    value,
  };
};

export const changeSignupConfirmPassword = (value) => {
  return {
    type: CHANGE_SIGNUP_CONFIRM_PASSWORD,
    value,
  };
};

export const setSignupError = (value) => {
  return {
    type: SET_SIGNUP_ERROR,
    value,
  };
}

export const submitSignup = (history) => {
  return (dispatch, getState) => {
    const state = getState();
    const { email, name, password } = state.signup;

    fetch(`${serverAPIBase}users/register`, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user:{
          email,
          name,
          password,
          batch_id: 1,
        }
      })
    })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }

      dispatch(setSignupError('Please check your values'));
      return false;
    })
    .then((result) => {
      if (result) {
        history.push('/login');
      }
    })
  }
}
