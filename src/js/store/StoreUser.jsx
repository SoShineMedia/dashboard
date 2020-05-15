/* eslint-disable */
import moment from 'moment';

export const login = () =>
{
    return{
        type: 'login',
    }
}
let initialState = 
{
  isLoadingTopLevel: false,
  response: {
    miners: null,
    txnInbound: null,
    txnOutbound: null,
    richList: {
      content: null
    }
  },
  momentUpdated: null
};

export function reducer_user (state = initialState, action){
    switch(action.type){
        case 'login':
            {
                return [];
            }
        default:
            {
                return state;
            }
    }
}