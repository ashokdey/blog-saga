import { NOT_AUTHENTICATED, ALREADY_AUTHENTICATED } from './constants';

export function notLoggedIn() {
  return {
    type: NOT_AUTHENTICATED,
    payload: 'Please login to continue',
  };
}

export function alreadyLoggedIn() {
  return {
    type: ALREADY_AUTHENTICATED,
    payload: null,
  };
}