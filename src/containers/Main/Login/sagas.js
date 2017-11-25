import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER_REQUEST,
} from './constants';

import {
  userLoginSuccess,
  userLoginFailed
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
    yield put(userLoginSuccess(response.data.token));
  } catch (error) {
    yield put(userLoginFailed(error));
  }
}

export default function* loginRequestWatcher () {
  yield takeLatest(LOGIN_USER_REQUEST, handleLogin);
};