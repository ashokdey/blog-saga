import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';
import { history } from './App'

const sagaMiddleware = createSagaMiddleware();
if (history.location && history.location.state) {
  // because we are manually setting 2 keys in RequireAuth HOC
  // we need to set the state to an empty object
  history.replace({ ...history.location, state: {}});
}
const routeMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware, routeMiddleware)
);

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

sagaMiddleware.run(rootSagas);

/*

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  return {
    ...createStore(rootReducer,
      applyMiddleware(logger, sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSagas)
  };
};

const store = configureStore();


*/

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();
