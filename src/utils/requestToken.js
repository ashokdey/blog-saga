import axios from 'axios';

export default function requestToken () {
  //get refresh token from Session Storage/Local Storage
  const refreshToken = localStorage.getItem('refreshToken');
  const refreshTokenURL = '';
  // make axios call to get refreshToken
  return axios.post(refreshTokenURL, {refreshToken});
}