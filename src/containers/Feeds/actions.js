import {
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED
} from './constants';

export function getAllPosts(token) {
  return {
    type: GET_ALL_POSTS_REQUEST,
    payload: token
  }
}

export function getAllPostsSuccess(posts) {
  return {
    type: GET_ALL_POSTS_SUCCESS,
    payload: posts
  }
}

export function getAllPostsFailed(error) {
  return {
    type: GET_ALL_POSTS_FAILED,
    payload: error
  }
}