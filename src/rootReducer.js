import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import registerLoginReducer from './containers/Main/reducer';
import feedsReducer from './containers/Feeds/reducer';


const rootReducer = combineReducers({
  user: registerLoginReducer,
  form: formReducer,
  route: routerReducer,
  posts: feedsReducer
});

export default rootReducer;
