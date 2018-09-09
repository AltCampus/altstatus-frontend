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
