import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryLiving.scss';

class CategoryLiving extends Component {
  render() {
    return (
      <div className="CategoryLiving" onMouseEnter={this.props.onMouseEnter}>
        <ul className="categoryUl">
          <li className="categoryLivingList">
            <span>미니인형</span>
            <span>중형인형</span>
            <span>대형인형</span>
            <span>키체인인형</span>
            <span>피규어/브릭</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryLiving);