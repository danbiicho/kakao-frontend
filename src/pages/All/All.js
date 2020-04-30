import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import AllList from './AllList';
import './All.scss';


class All extends Component {
  render() {
    return (
      <div className="All">
        <div className="allContainer">
          <CategoryHeader />
          <div className="allListContainer">
            <AllList />
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(All);