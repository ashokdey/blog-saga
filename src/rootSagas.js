import { all } from 'redux-saga/effects';
import handleRegistrationSaga from './containers/Main/Register/sagas';
import handleLoginSaga from './containers/Main/Login/sagas';

// single entry point to start all Sagas at once
export default function* rootSagas() {
  yield all([
    handleRegistrationSaga(),
    handleLoginSaga(),
  ]);
}