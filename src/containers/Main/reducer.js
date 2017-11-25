import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './Register/constants';

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './Login/constants';

// initial state (state model)
// const state = {
//   token: null,
//   error: null,
//   loading: false
// }

export default function(state, action){
  switch(action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true, token: null };

    case REGISTER_USER_SUCCESS:
      return { ...state, token: action.payload, loading: false };
    
    case REGISTER_USER_FAILED:
      console.log(action.payload);
      return { ...state, token: null, loading: false, error: action.payload };
    
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true, token: null };

    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.payload, loading: false };
    
    case LOGIN_USER_FAILED:
      return { ...state, token: null, loading: false, error: action.payload }

    default: 
      return {
        token: null,
        error: null,
        loading: false
      };
  }
}