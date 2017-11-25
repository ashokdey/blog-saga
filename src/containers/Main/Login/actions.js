import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './constants';


export function loginUser (fields) {
  return {
    type: LOGIN_USER_REQUEST,
    payload: fields
  }
}

export function loginUserSuccess (user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

export function loginUserFailed (error) {
  return {
    type: LOGIN_USER_FAILED,
    payload: error
  }
}