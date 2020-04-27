import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HotList from './HotList';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import './Hot.scss';

class Hot extends Component {
  render() {
    return (
      <div className="Hot">
        {/* <div className="hotNav"> */}
        <Navbar />
        <Menu />
        {/* </div> */}
        <div className="hotContainer">
          <HotList />
        </div>
      </div>
    );
  }
}

export default withRouter(Hot);