import userReducer from './userReducer.js';
import {combineReducers} from 'redux';
const allReducers = combineReducers({
  userReducer:userReducer
});

export default allReducers;
