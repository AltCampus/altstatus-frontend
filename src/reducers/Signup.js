import {
  CHANGE_SINGUP_NAME,
  CHANGE_SIGNUP_EMAIL,
  CHANGE_SIGNUP_PASSWORD,
  CHANGE_SINGUP_BATCH,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  batch: '',
}

const SignUp = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SINGUP_NAME:
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
    case CHANGE_SINGUP_BATCH:
      return {
        ...state,
        batch: action.value,
      };
    default:
      return state;
  }
};

export default SignUp;
