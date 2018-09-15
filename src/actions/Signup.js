import { serverAPIBase } from '../config';
import {
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_BATCH,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_CONFIRM_PASSWORD,
  SET_SIGNUP_ERROR,
  PROCESSING_SIGNUP,
} from './types';

export const changeSignupName = (value) => {
  return (dispatch) => {
    dispatch(setSignupError(''));
    dispatch({
      type: CHANGE_SIGNUP_NAME,
      value,
    });
  };
};

export const changeSignupEmail = (value) => {
  return (dispatch) => {
    dispatch(setSignupError(''));
    dispatch({
      type: CHANGE_SIGNUP_EMAIL,
      value,
    });
  };
};

export const changeSignupPassword = (value) => {
  return (dispatch) => {
    dispatch(setSignupError(''));
    dispatch({
      type: CHANGE_SIGNUP_PASSWORD,
      value,
    });
  }
};

export const changeSignupBatch = (value) => {
  return (dispatch) => {
    dispatch(setSignupError(''));
    dispatch({
      type: CHANGE_SIGNUP_BATCH,
      value,
    });
  }
};

export const changeSignupConfirmPassword = (value) => {
  return (dispatch) => {
    dispatch(setSignupError());
    dispatch({
      type: CHANGE_SIGNUP_CONFIRM_PASSWORD,
      value,
    });
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
    const { email, name, password, confirmPassword } = state.signup;
    
    dispatch(setSignupError(''));

    if (password !== confirmPassword) {
      dispatch(setSignupError('Confirm Password has to be same as password.'));
      return;
    }

    dispatch({
      type: PROCESSING_SIGNUP,
      value: true,
    });

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

      if (res.status === 422) {
        dispatch(setSignupError('The email address is already taken.'));

        return false
      }

      dispatch(setSignupError('Please check you input values.'));
      return false;
    })
    .then((result) => {
      if (result) {
        history.push('/login');
      }
      dispatch({
        type: PROCESSING_SIGNUP,
        value: false,
      })
    })
  }
}
