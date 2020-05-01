import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InnerCategory.scss";

class InnerCategory extends Component {
  render() {
    const { InnerCategories } = this.props;
    return(
      <div className="InnerCategory">
        {InnerCategories.map( (category, index) => (
          <Link key={index} to="/products/category/subject" 
          style={{ textDecoration: 'none'}}>
            <li>{category.name}</li>
          </Link>
        )
        )}
      </div>
    )
  }
}

export default InnerCategory;