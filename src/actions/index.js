import axios from 'axios';
const API_KEY = 'AIzaSyDxlGl5T3eiWk1pFNSCJ-zffXHyI6iTrTY';
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search`;
const TYPE = 'video';
const PART = 'snippet';
const MAX_RESULT = 10;

export const SEARCH_VIDEO = 'SEARCH_VIDEO';

export function searchVideo(term) {
  //console.log(videos);
  const url = `${ROOT_URL}?part=${PART}&q=${term}&type=${TYPE}&maxResults=${MAX_RESULT}&key=${API_KEY}`;
  const videos = axios.get(url);
  //console.log('Before ReduxMiddle: ', videos);
  return {
    type: SEARCH_VIDEO,
    payload: videos
  };
}

export const CLICKED_VIDEO = 'CLICKED_VIDEO';
export function clickedVideo(video) {
  return {
    type: CLICKED_VIDEO,
    payload: video
  };
}
