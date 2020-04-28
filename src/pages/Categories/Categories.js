import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { name1 } from "../../config";
import "./Categories.scss";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
    };
  }

  componentDidMount = () => {
    fetch(name1)
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        datas: res.Category
      })
    })
  }

  render() {
    return (
      <div className="Categories">
        <div className="categoriesHover">
          <div
            className="categoryWrapper"
            onMouseLeave={this.props.onMouseLeave}
          >
            <ul className="categoryMenuUl">
              <div className="categoryList1">
                {this.state.datas.map( (data) => {
                  return <li>{data.name}</li>
                  })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
