import {
  SET_POSTS,
} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
};

const Posts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.value,
      };
    default:
      return state;
  }
};

export default Posts;
