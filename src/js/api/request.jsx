/* eslint-disable */
import * as network from 'network/NCNetwork';
import { store } from 'stores/NCReduxStore';
import { Router, Route, IndexRedirect, hashHistory} from 'react-router';

export const PAGE_SIZE = 25;

export const getBlkListTopLevel = (listType, queryStr) => {
  store.dispatch(StoreBlkList.GetTopLevel({
    queryStr: queryStr,
    listType: listType,
  }));

  //check login
  if (!network.NCNETWORK_REQUESTS_ENABLED) {
    store.dispatch();
  }
  else {
    network.request(ep, params)
    .then((response) => {
      store.dispatch(StoreBlkList.SetTopLevel(response));
    })
    .catch((error) => {
      console.log(error);
      store.dispatch(StoreBlkList.SetTopLevel({}));
    });
  }
}