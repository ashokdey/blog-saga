import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER_REQUEST,
} from './constants';

import {
  loginUserSuccess,
  loginUserFailed
} from './actions';

import { BASE_URL } from '../../../config';

function loginUser (data) {
  return axios.post(`${BASE_URL}/api/register`, data);
}

function* handleLogin(action) {
  try {
    const { data } = yield(call(loginUser, action.payload));
    const response = data;
  
    localStorage.setItem('user', `${response.data.token}`);
    yield put(loginUserSuccess(response.data.token));
  } catch (error) {
    //get response from server 
    const { response } = error;
    const message = response.data.message;
    yield put(loginUserFailed(message));
  }
}

export default function* loginRequestWatcher () {
  yield takeLatest(LOGIN_USER_REQUEST, handleLogin);
};