import { combineReducers } from 'redux';
import ReducerVideos from './reducer-videos';
import ReducerCurrent from './reducer-current';

const rootReducer = combineReducers({
  videos: ReducerVideos,
  currentVideo: ReducerCurrent
});

export default rootReducer;
