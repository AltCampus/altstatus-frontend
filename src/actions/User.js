import { SET_USER_INFO } from './types';

export const setUserInfo = () => {
  return (dispatch) => {
    const userInfo = localStorage.getItem('userInfo');
    console.log(userInfo);
    dispatch({
      type: SET_USER_INFO,
      value: JSON.parse(userInfo),
    })
  }
}
