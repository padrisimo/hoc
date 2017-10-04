import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  authenticaticated: authenticationReducer
});

export default rootReducer;
