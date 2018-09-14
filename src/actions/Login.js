import { serverAPIBase } from '../config';
import { CHANGE_LOGIN_EMAIL, CHANGE_LOGIN_PASSWORD } from './types';

export const changeLoginEmail = (value) => {
  return {
    type: CHANGE_LOGIN_EMAIL,
    value,
  };
};

export const changeLoginPassword = (value) => {
  return {
    type: CHANGE_LOGIN_PASSWORD,
    value,
  };
};

export const submitLogin = (history) => {
  return (dispatch, getState) => {
    const state = getState();
    const { email, password } = state.login;

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

      // dispatch(setSignupError('Please check your values'));
      return false;
    })
    .then((result) => {
      if (result) {
        localStorage.setItem('userInfo', JSON.stringify(result));
        history.push('/dashboard');
      }
    })
  }
}