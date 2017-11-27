import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED
} from './constants';

// initial state 
const initialState = {
  posts: null,
  error: null,
  loading: true,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_POSTS_REQUEST: 
      return { ...state, loading: true, posts: null, error: null };
    case GET_ALL_POSTS_SUCCESS: 
      return { ...state, loading: false, posts: action.payload, error: null };
    case GET_ALL_POSTS_FAILED:
      return { ...state, loading: false, posts: null, error: action.payload };
    default:
      return state;
  }
}