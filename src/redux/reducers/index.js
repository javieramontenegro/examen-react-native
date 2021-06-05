import {combineReducers} from 'redux';
import loginInReducer from './login';
import likeReducer from './like';
import profileReducer from './profile';

const reducers = combineReducers({
  loginInReducer,
  likeReducer,
  profileReducer,
});

export default reducers;
