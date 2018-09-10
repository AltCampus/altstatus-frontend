import { serverAPIBase } from '../config';
import {
  CHANGE_POST_REFLECTION,
  CHANGE_POST_TWITTER_URL,
  CHANGE_POST_MEDIUM_URL,
  ADD_POST,
  RESET_ADD_POST,
} from './types';

export const changePostReflection = (value) => {
  return {
    type: CHANGE_POST_REFLECTION,
    value,
  };
};

export const changePostTwitterURL = (value) => {
  return {
    type: CHANGE_POST_TWITTER_URL,
    value,
  };
};

export const changePostMediumURL = (value) => {
  return {
    type: CHANGE_POST_MEDIUM_URL,
    value,
  };
};

export const submitPost = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { twitterUrl, mediumUrl, reflection } = state.createPost;
    const { id, token } = state.user;
    fetch(`${serverAPIBase}submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        submission: {
          reflection,
          twitter_url: twitterUrl,
          medium_url: mediumUrl,
          user_id: id,
        }
      })
    })
    .then((res) => {
      if (res.status === 201) {
        return res.json();
      }
    })
    .then((result) => {
      dispatch({
        type: ADD_POST,
        value: result.data,
      });
      dispatch({
        type: RESET_ADD_POST,
      });
    })
  }
}
