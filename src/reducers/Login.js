import {
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  PROCESSING_LOGIN,
  LOGIN_ERROR,
  RESET,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
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
    case PROCESSING_LOGIN:
      return {
        ...state,
        loading: action.value,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.value,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default Login;
