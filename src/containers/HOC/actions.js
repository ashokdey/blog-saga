import { NOT_AUTHENTICATED } from './constants';

export function notLoggedIn() {
  return {
    type: NOT_AUTHENTICATED,
    payload: 'Please login to continue',
  };
}