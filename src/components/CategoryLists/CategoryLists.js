import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryLists.scss';

class CategoryLists extends Component {
  constructor(){
    super()
    this.state = {
      datas:[]
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/categoryLists.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        datas: res.list1
      })
    })
  }

  render() {
    const {datas} = this.state;

    const categoryLists2 = datas.map((data)=>{
      return <button>{data}</button>;
    });

    return(
      <div className="CategoryLists">
        {categoryLists2}
      </div>
    )
  }
}

export default withRouter(CategoryLists);