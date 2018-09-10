import { combineReducers } from 'redux';

import Login from './Login';
import Posts from './Posts';
import CreatePost from './CreatePost';
import Signup from './Signup';
import User from './User';

const reducers = combineReducers({
  login: Login,
  posts: Posts,
  signup: Signup,
  createPost: CreatePost,
  user: User,
});

export default reducers;
