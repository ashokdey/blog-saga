import {
  REGISTER_USER_REQUEST,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_FAILED
} from './constants';

export function registerUser(fields) {
  return {
    type: REGISTER_USER_REQUEST,
    payload: fields
  };
}