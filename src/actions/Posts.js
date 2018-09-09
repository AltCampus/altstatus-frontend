export const getPosts = () => {
  return (dispatch, getState) => {
    fetch()
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((result) => {
      dispatch({
        type: SET_POSTS,
        value: result,
      });
    });
  };
};
