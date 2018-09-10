import { SET_POSTS } from './types';
import { serverAPIBase } from '../config';

export const fetchPosts = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { token, id } = state.user;
    console.log(token, state.user);

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
    })
    .then((result) => {
      if (!result.error) {
        dispatch({
          type: SET_POSTS,
          value: result.data,
        });
      }
    });

    // dispatch({
    //   type: SET_POSTS,
    //   value: [
    //     {
    //         "twitter_url": "testurl",
    //         "timestamp": "2018-09-09T14:59:06.943234",
    //         "reflection": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //         "medium_url": null,
    //         "id": 3
    //     }
    // ]})
  };
};
