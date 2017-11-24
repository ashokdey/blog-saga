import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

sagaMiddleware.run(rootSagas)

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();
