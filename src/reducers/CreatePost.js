import {
  CHANGE_POST_REFLECTION,
  CHANGE_POST_TWITTER_URL,
  CHANGE_POST_MEDIUM_URL,
  CREATING_POST,
  RESET_ADD_POST,
} from '../actions/types';

const INITIAL_STATE = {
  reflection: '',
  twitterUrl: '',
  mediumUrl: '',
  loading: false
};

const CreatePost = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_POST_REFLECTION:
      return {
        ...state,
        reflection: action.value,
      };
    case CHANGE_POST_TWITTER_URL:
      return {
        ...state,
        twitterUrl: action.value,
      }
    case CHANGE_POST_MEDIUM_URL:
      return {
        ...state,
        mediumUrl: action.value,
      };
    case CREATING_POST:
      return {
        ...state,
        loading: action.value,
      };
    case RESET_ADD_POST:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default CreatePost;
