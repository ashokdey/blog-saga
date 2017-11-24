import { all } from 'redux-saga/effects';
import handleRegistrationSaga from './containers/Register/sagas';

// single entry point to start all Sagas at once
export default function* rootSagas() {
  yield all([
    handleRegistrationSaga(),
  ]);
}