import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './constants';

export function registerUser(fields) {
  return {
    type: REGISTER_USER_REQUEST,
    payload: fields
  };
}

export function registerUserSuccess(user) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user
  };
}

export function registerUserFailed(error) {
  return {
    type: REGISTER_USER_FAILED,
    payload: error
  };
}