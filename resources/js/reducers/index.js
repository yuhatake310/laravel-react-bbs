import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import boards_index from './boards_index';
import threads_show from './threads_show';
import users_show from './users_show';

export default combineReducers({ boards_index, threads_show, users_show, form });