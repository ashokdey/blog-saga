import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { BASE_URL } from '../../config';
import {
  GET_ALL_POSTS_REQUEST
} from './constants';

import {
  getAllPostsSuccess,
  getAllPostsFailed
} from './actions';

import { notLoggedIn } from '../HOC/actions';

function getAllPosts (data) {
  const  options = {
    method: 'GET',
    headers : {'x-auth': data}
  }
  return axios(`${BASE_URL}/api/posts`, options);
}

function* handleGetAllPosts(action) {
  try {
    const { data } = yield call(getAllPosts, action.payload);
    const response = data;
    yield put(getAllPostsSuccess(response.data));
  } catch(error) {
    const { response } = error;
    if (response.status === 401) {
      // redirect to login
      yield put(notLoggedIn())
      yield put(push('/login'));
    }
    const message = response.data.message;
    yield put(getAllPostsFailed(message));
  }

}

export default function* getAllPostsWatcher(){
  yield takeLatest(GET_ALL_POSTS_REQUEST, handleGetAllPosts)
}