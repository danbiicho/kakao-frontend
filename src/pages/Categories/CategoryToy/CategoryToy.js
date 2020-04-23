import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryToy.scss';

class CategoryToy extends Component {

  goToToyMiniDoll = () => {
    this.props.history.push('/toyMiniDoll')
  }

  render() {
    return(
      <div className="categoryToy" onMouseEnter={this.props.onMouseEnter}>
        <ul className="categoryUl">
          <li onClick={this.goToToyMiniDoll}>미니인형</li>
          <li>중형인형</li>
          <li>대형인형</li>
          <li>키체인인형</li>
          <li>피규어/브릭</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(CategoryToy);