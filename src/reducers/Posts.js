import {
  SET_POSTS,
  ADD_POST,
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
    case ADD_POST:
      return {
        ...state,
        posts: [
          action.value,
          ...state.posts,
        ]
      }
    default:
      return state;
  }
};

export default Posts;
