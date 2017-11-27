import { push } from 'react-router-redux';
import { takeLatest, put } from 'redux-saga/effects';
import { NOT_AUTHENTICATED } from './constants';

function* handleNotAuthenticated() {
  yield put(push('/login'));
}

export default function* notAuthenticatedWatcher() {
  yield takeLatest(NOT_AUTHENTICATED, handleNotAuthenticated);
}