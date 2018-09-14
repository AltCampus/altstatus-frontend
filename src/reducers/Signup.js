import {
  CHANGE_SIGNUP_NAME,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SIGNUP_BATCH,
  CHANGE_SIGNUP_CONFIRM_PASSWORD,
  RESET,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  batch: '',
  confirmPassword: '',
}

const SignUp = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SIGNUP_NAME:
      return {
        ...state,
        name: action.value,
      }
    case CHANGE_SIGNUP_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case CHANGE_SIGNUP_PASSWORD:
      return {
        ...state,
        password: action.value,
      }
    case CHANGE_SIGNUP_BATCH:
      return {
        ...state,
        batch: action.value,
      };
    case CHANGE_SIGNUP_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.value,
      }
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default SignUp;
