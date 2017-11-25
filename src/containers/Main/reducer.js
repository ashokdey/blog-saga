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
      return { loading: true, ...state };

    case REGISTER_USER_SUCCESS:
      return { token: action.payload, loading: false, ...state };
    
    case REGISTER_USER_FAILED:
      return { token: null, loading: false, error: action.payload, ...state };
    
    case LOGIN_USER_REQUEST:
      return { loading: true, ...state };

    case LOGIN_USER_SUCCESS:
      return { token: action.payload, loading: false, ...state };
    
    case LOGIN_USER_FAILED:
      return { token: null, loading: false, error: action.payload, ...state }

    default: 
      return {
        token: null,
        error: null,
        loading: false
      };
  }
}