import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import registerLoginReducer from './containers/Main/reducer';
import hocReducer from './containers/HOC/reducer';


const rootReducer = combineReducers({
  user: registerLoginReducer,
  form: formReducer,
  route: routerReducer,
  auth: hocReducer,
});

export default rootReducer;
