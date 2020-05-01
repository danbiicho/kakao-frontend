import React, { Component } from 'react';
import '../SelectBox/SelectBox2';
import './ChrCategory.scss';

class ChrCategory extends Component {
  constructor(props) {
      super(props);
      this.state = {
          select: null,
          choosenFriend: null,
      };
  }
  handleMouseEnter = (index) => {
      this.setState({
          choosenFriend: index,
      });
  }
  handleMouseLeave = () => {
      this.setState({
          choosenFriend: null,
      })
  }

  checkActive = (el, i) => {        
    if (i === this.state.select) return 2;
    if (i === this.state.choosenFriend) return 1;
    return 0;
  }

  render() {
    const { options } = this.props;
    return (
      <div className="ChrCategory">
        <ul className="imgOptions">
          {options.map((el, i) => (
              <li key={i}
                onMouseEnter={() => this.handleMouseEnter(i)}
                onMouseLeave={this.handleMouseLeave}
                className="optionsList">
              <img
                className="imgList"
                src={this.checkActive(el, i) ? el.srcChange : el.src}
                alt="img"
              />
              <div className="listName">
                <span className="listLink">
                  {el.name}
                </span>
              </div>
              </li>
            ))}
        </ul>   
      </div>
    );
  }
}

export default ChrCategory;