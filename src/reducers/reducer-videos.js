import { SEARCH_VIDEO } from '../actions/index';
export default function(state = null, action) {
  //console.log('Action Received: ', action);
  switch (action.type) {
    case SEARCH_VIDEO:
      return action.payload.data;
  }
  return state;
}
