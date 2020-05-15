/* eslint-disable */
import { createStore, combineReducers } from 'redux';

import { reducer_user } from './StoreUser';

// store -----------------------------------------------------------------

export const store = createStore(combineReducers(
{
    user: reducer_user,          
}));