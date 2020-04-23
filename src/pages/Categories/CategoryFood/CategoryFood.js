import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryFood.scss';

class CategoryFood extends Component {
  render() {
    return(
      <div className="categoryFood"
      onMouseEnter={this.props.onMouseEnter}
      onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryFoodList">
            <span>스낵</span>
            <span>음료</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryFood);