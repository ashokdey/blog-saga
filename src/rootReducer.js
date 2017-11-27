import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import registerLoginReducer from './containers/Main/reducer';


const rootReducer = combineReducers({
  user: registerLoginReducer,
  form: formReducer,
  route: routerReducer
});

export default rootReducer;
