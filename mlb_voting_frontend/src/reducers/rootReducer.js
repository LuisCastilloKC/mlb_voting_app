import { combineReducers } from 'redux';

import { pollsReducer } from './pollsReducer'

export const rootReducer = combineReducers({
    polls: pollsReducer,
});