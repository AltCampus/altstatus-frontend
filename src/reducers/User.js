import {
  SET_USER_INFO,
  RESET,
} from '../actions/types';

const INITIAL_STATE = {};

const User = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.value,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default User;
