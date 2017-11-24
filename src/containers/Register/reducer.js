import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from './constants';

// initial state (state model)
const state = {
  user: null,
  error: null,
  loading: false
}


export default function(state, action){
  switch(action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true, ...state };

    case REGISTER_USER_SUCCESS:
      return { user: action.payload, loading: false, ...state };
    
    case REGISTER_USER_FAILED:
      return { user: null, loading: false, error: action.payload, ...state }

    default: 
      return state;
  }
}