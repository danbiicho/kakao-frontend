import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryTravel.scss';

class CategoryTravel extends Component {
  render() {
    return (
      <div className="CategoryTravel"
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryTravelList">
            <span>여행</span>
            <span>레져</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryTravel);