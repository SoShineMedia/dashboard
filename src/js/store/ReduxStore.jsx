/* eslint-disable */
import { createStore, combineReducers } from 'redux';

import { reducer_user } from './StoreUser';

// store -----------------------------------------------------------------
//TODO: build out redux functionality
export const store = createStore(combineReducers(
{
    user: reducer_user,          
}));