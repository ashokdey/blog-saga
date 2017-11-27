import { NOT_AUTHENTICATED } from './constants';

export default function(state = {error: null }, action) {
  switch(action.type) {
    case NOT_AUTHENTICATED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}