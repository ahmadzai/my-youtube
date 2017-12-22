import { CLICKED_VIDEO } from '../actions/index';
export default function(state = null, action) {
  //console.log(action.payload);
  switch (action.type) {
    case CLICKED_VIDEO:
      return action.payload;
  }
  return state;
}
