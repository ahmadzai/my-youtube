import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import VideosList from '../containers/videos-list';
import VideoDetail from '../containers/video-detail';
//import { searchVideo } from '../actions/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    //searchVideo('Best Pashto Songs');
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideosList />
      </div>
    );
  }
}
