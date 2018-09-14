import { RESET } from "./types";

export const logout = (history) => {
  return (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
      type: RESET,
    })
    history.push('/');
    // Will use this code in the future for logging out the user.
    // fetch(`${serverAPIBase}users/logout`, {
    //   method: "POST",
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: token,
    //   },
    // })
    // .then((res) => {
    //   if (res.status === 200) {
    //     return res.json();
    //   }
    //   // dispatch(setSignupError('Please check your values'));
    //   return false;
    // })
    // .then((result) => {
    //   if (result) {
    //     localStorage.removeItem('userInfo');
    //     history.push('/');
    //   }
    // })
  }
}