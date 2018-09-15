import { serverAPIBase } from '../config';
import {
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  PROCESSING_LOGIN,
  LOGIN_ERROR,
} from './types';

export const changeLoginEmail = (value) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ERROR,
      value: '',
    });
    dispatch({
      type: CHANGE_LOGIN_EMAIL,
      value,
    });
  }
};

export const changeLoginPassword = (value) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_ERROR,
      value: '',
    });
    dispatch({
      type: CHANGE_LOGIN_PASSWORD,
      value,
    });
  }
};

export const submitLogin = (history) => {
  return (dispatch, getState) => {
    const state = getState();
    const { email, password } = state.login;
  
    dispatch({
      type: PROCESSING_LOGIN,
      value: true,
    });

    dispatch({
      type: LOGIN_ERROR,
      value: '',
    });

    fetch(`${serverAPIBase}users/login`, {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      dispatch({
        type: LOGIN_ERROR,
        value: 'Please check your email address and password.',
      });
      return false;
    })
    .then((result) => {
      if (result) {
        localStorage.setItem('userInfo', JSON.stringify(result));
        history.push('/dashboard');
      }
      dispatch({
        type: PROCESSING_LOGIN,
        value: false,
      });
    })
  }
}