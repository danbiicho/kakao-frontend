import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NewBanner from './NewBanner/NewBanner'
import NewArticle from './NewArticle/NewArticle';
import './New.scss';

class New extends Component {
  render() {
    return(
      <div className="New">
        <NewBanner />
        <NewArticle />
      </div>
    )
  }
}

export default withRouter(New);