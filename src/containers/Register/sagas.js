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

import { BASE_URL } from '../../config';

function registerNewUser(data) {
  return axios.post(`${BASE_URL}/api/users`, data)
}

function* handleRegistration(action) {
  try {
    const response = yield call(registerNewUser, action.payload);
    console.log(response);
    // yield put(registerUserSuccess(response.data))
  } catch (error) {
    console.log(error);
    yield put(registerUserFailed(error));
  }   
}

// keep watching, whenever REGISTER_USER_REQUEST action is fired, call
// handleRegistration generator 
export default function* registrationRequestWatcher() {
  yield takeLatest(REGISTER_USER_REQUEST, handleRegistration);
}