import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import boards_index from './boards_index';

export default combineReducers({ boards_index, form });