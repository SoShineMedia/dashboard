/* eslint-disable */
import { createStore, combineReducers } from 'redux';

import { reducer_user } from './reducers/StoreUser';

import { reducer_firm } from './reducers/StoreFirm';
import { reducer_matter } from './reducers/StoreMatter';
import { reducer_matterList } from './reducers/StoreMatterList';
import { reducer_document } from './reducers/StoreDocument';
import { reducer_documentList } from './reducers/StoreDocumentList';
import { reducer_client } from './reducers/StoreClient';
import { reducer_clientList } from './reducers/StoreClientList';
import { reducer_event } from './reducers/StoreClient';
import { reducer_eventList } from './reducers/StoreClientList';

// store -----------------------------------------------------------------
//TODO: build out redux functionality
export const store = createStore(combineReducers(
{
    user: reducer_user, 
    firm: reducer_firm, 
    matter: reducer_matter,
    matterList: reducer_matterList, 
    document: reducer_document,
    documentList: reducer_documentList, 
    client: reducer_client, 
    clientList: reducer_clientList,
    event: reducer_event,
    eventList: reducer_eventList,


}));