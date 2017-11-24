import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();
