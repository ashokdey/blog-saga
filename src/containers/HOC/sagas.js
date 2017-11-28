import { push } from 'react-router-redux';
import { takeLatest, put } from 'redux-saga/effects';
import { NOT_AUTHENTICATED, ALREADY_AUTHENTICATED } from './constants';

function* handleNotAuthenticated() {
  yield put(push('/login'));
}

function* handleAlreadyAuthenticated() {
  yield put(push('/'));
}


export default function* notAuthenticatedWatcher() {
  yield takeLatest(NOT_AUTHENTICATED, handleNotAuthenticated);
  yield takeLatest(ALREADY_AUTHENTICATED, handleAlreadyAuthenticated);
}