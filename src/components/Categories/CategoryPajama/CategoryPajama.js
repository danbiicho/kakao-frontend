import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryPajama.scss';

class CategoryPajama extends Component {
  render() {
    return(
      <div className="categoryPajama"
      onMouseEnter={this.props.onMouseEnter}
      onMouseLeave={this.props.onMouseLeave}>
        <ul className="categoryUl">
          <li className="categoryPajamaList">
            <span>여성</span>
            <span>남성</span>
            <span>키즈</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryPajama);