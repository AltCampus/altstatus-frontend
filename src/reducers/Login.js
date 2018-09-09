import {
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
}

const Login = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_LOGIN_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case CHANGE_LOGIN_PASSWORD:
      return {
        ...state,
        password: action.value,
      }
    default:
      return state;
  }
};

export default Login;
