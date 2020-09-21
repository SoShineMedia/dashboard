/* eslint-disable */
import * as network from 'network/NCNetwork';
import { store } from 'store/ReduxStore';
import { store } from 'store/ReduxStore';
import { Router, Route, IndexRedirect, hashHistory} from 'react-router';


export const getBlkListTopLevel = (listType, queryStr) => {
   //check login
  if (!network.NCNETWORK_REQUESTS_ENABLED) {
    //store.dispatch();
  }
  else {
    network.request(ep, params)
    .then((response) => {
      store.dispatch(StoreBlkList.SetTopLevel(response));
    })
    .catch((error) => {
      store.dispatch(StoreBlkList.SetTopLevel({}));
    });
  }
}