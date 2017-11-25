import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerLoginReducer from './containers/Main/reducer';


const rootReducer = combineReducers({
  user: registerLoginReducer,
  form: formReducer
});

export default rootReducer;
