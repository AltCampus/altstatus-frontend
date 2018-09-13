import { SET_POSTS, LOADING_POSTS } from './types';
import { serverAPIBase } from '../config';

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { token, id } = state.user;
    dispatch({
      type: LOADING_POSTS,
      value: true,
    });
    fetch(`${serverAPIBase}submissions/user/${id}`, {
      cors: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      }
    })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }

      dispatch({
        type: LOADING_POSTS,
        value: false,
      });
    })
    .then((result) => {
      if (!result.error) {
        dispatch({
          type: SET_POSTS,
          value: result.data,
        });
      }
      dispatch({
        type: LOADING_POSTS,
        value: false,
      });
    });
  };
};
