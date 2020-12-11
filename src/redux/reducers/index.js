import { combineReducers } from 'redux';
import emails from './emails';
import filter from './filter';
import time from './time';

const reducers = combineReducers({
    emails,
    filter,
    time,
});

export default reducers;