import {combineReducers} from 'redux';
import loginInReducer from './login';

import profileReducer from './profile';

const reducers = combineReducers({
  loginInReducer,

  profileReducer,
});

export default reducers;
