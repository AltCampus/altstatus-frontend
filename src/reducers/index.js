import { combineReducers } from 'redux';

import Login from './Login';
import Posts from './Posts';
import CreatePost from './CreatePost';
import Signup from './Signup';

const reducers = combineReducers({
  login: Login,
  posts: Posts,
  signup: Signup,
  createPost: CreatePost,
});

export default reducers;
