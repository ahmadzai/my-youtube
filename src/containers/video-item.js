import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { clickedVideo } from '../actions/index';
import { connect } from 'react-redux';

class VideoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = this.props.video.snippet.thumbnails.default.url;
    //console.log(this.props.video);
    return (
      <li
        className="list-group-item"
        onClick={() => this.props.clickedVideo(this.props.video)}
      >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={url} />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }

  componentWillMount() {
    this.props.clickedVideo(this.props.videos.items[0]);
  }
}

function mapStateToProps({ videos }) {
  return { videos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clickedVideo: clickedVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);
