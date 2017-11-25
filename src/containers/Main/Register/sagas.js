import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
/**
 * call - it is used to call a function with arguments
 * put - to dispatch an action
 * takeLatest - out of all the
 */
import {
  REGISTER_USER_REQUEST,
} from './constants';

import {
  registerUserSuccess,
  registerUserFailed,
} from './actions';

import { BASE_URL } from '../../../config';

function registerNewUser(data) {
  return axios.post(`${BASE_URL}/api/register`, data);  
}

function* handleRegistration(action) {
  try {
    const {data} = yield call(registerNewUser, action.payload);
    // data is inside response.data.data
    const response = data;

    // set the user's token in local storage to be used with every request
    localStorage.setItem('user', `${response.data.token}`);
    // also set the user : token in state by calling registerUserSuccess action
    yield put(registerUserSuccess(response.data.token));
  } catch (error) {
    // console.log(error.response);
    const { response } = error;
    yield put(registerUserFailed(response.data.message));
  }   
}

// keep watching, whenever REGISTER_USER_REQUEST action is fired, call
// handleRegistration generator 
export default function* registrationRequestWatcher() {
  yield takeLatest(REGISTER_USER_REQUEST, handleRegistration);
}