import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HotList from './HotList';
import './Hot.scss';

class Hot extends Component {
  render() {
    return (
      <div className="Hot">
        <div className="hotContainer">
          <HotList />
        </div>
      </div>
    );
  }
}

export default withRouter(Hot);