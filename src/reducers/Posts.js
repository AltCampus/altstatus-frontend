import {
  SET_POSTS,
  ADD_POST,
  LOADING_POSTS,
} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  loading: false,
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
    case LOADING_POSTS:
      return {
        ...state,
        loading: action.value,
      }
    default:
      return state;
  }
};

export default Posts;
