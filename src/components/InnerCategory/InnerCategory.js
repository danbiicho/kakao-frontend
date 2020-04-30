import React, { Component } from "react";
import "./InnerCategory.scss";

class InnerCategory extends Component {
  constructor() {
    super()
    this.state = {
      datas: [],
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/InnerCategory.json")
    .then( res => res.json())
    .then( res => {
      this.setState({
        datas: res.toy
      })
    })
  }

  render() {
    const { datas } = this.state;
    return(
      <div className="InnerCategory">
        {datas.map( data => { return (<li>{data}</li>)})}
      </div>
    )
  }
}

export default InnerCategory;