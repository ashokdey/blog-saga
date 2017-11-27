import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';
import { push } from 'react-router-redux'

import {
  LOGIN_USER_REQUEST,
} from './constants';

import {
  loginUserSuccess,
  loginUserFailed
} from './actions';

import { BASE_URL } from '../../../config';

function loginUser (data) {
  return axios.post(`${BASE_URL}/api/login`, data);
}

function* handleLogin(action) {
  try {
    const { data } = yield(call(loginUser, action.payload));
    const response = data;
  
    localStorage.setItem('user', `${response.data.token}`);
    yield put(loginUserSuccess(response.data.token));
    // yield put(stopSubmit('LoginForm'));
    yield put(push('/home'));
  } catch (error) {
    //get response from server 
    const { response } = error;
    const message = response.data.message;
    yield put(stopSubmit('LoginForm'));
    yield put(loginUserFailed(message));
  }
}

export default function* loginRequestWatcher () {
  yield takeLatest(LOGIN_USER_REQUEST, handleLogin);
};