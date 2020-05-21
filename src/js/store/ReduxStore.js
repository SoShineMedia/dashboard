/* eslint-disable */
import { createStore, combineReducers } from 'redux';

import { reducer_user } from './StoreUser';

import { reducer_firm } from './reducer/StoreFirm';
import { reducer_matter } from './StoreMatter';
import { reducer_matterList } from './StoreMatterList';
import { reducer_document } from './reducer/StoreDocument';
import { reducer_documentList } from './reducer/StoreDocumentList';
import { reducer_client } from './reducer/StoreClient';
import { reducer_clientList } from './reducer/StoreClientList';
import { reducer_event } from './reducer/StoreClient';
import { reducer_eventList } from './reducer/StoreClientList';

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