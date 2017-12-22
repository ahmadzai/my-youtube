import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './video-item';

class VideosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.videos) {
      return <li className="list-group-item">Loading ... </li>;
    }
    const videoItems = this.props.videos.items.map(video => {
      return <VideoItem video={video} key={video.id.videoId} />;
    });
    //this.props.clickedVideo(this.props.videos.items[0]);
    return <ul className="col-md-4 list-group">{videoItems}</ul>;
  }
}

function mapStateToProps({ videos }) {
  return { videos };
}

export default connect(mapStateToProps)(VideosList);
