import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.props.searchVideo('Pashto Naghma Songs');
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            value={this.state.term}
            className="form-control"
            placeholder="Search any type of vidoes"
            onChange={this.onInputChange}
          />
          <div className="input-group-btn">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchVideo(this.state.term);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
