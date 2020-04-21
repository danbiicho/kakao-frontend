import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryToy.scss';

class CategoryToy extends Component {
  render() {
    return(
      <div className="categoryToy" onMouseEnter={this.props.onMouseEnter}>
        <ul className="categoryUl">
          <li className="categoryToyList">
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

export default withRouter(CategoryToy);