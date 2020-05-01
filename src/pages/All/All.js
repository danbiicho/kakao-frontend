import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
// import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import InfoBlock from '../../components/CategoryHeader/InfoBlock'
import SelectBox1 from '../../components/SelectBox/SelectBox1';
import SelectBox2 from '../../components/SelectBox/SelectBox2';
import HeaderData from '../../components/CategoryHeader/CategoryHeaderData';
import AllList from './AllList';
import './All.scss';
import { API } from '../../config';

const obj = {
  0: "hot",
  1: "new",
  2: "high_price",
  3: "low_price"
}

class All extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      select: 0,
    };
  }


  select = i => {
    this.setState({
      select: i,
    });
  }

  componentDidMount() {
    fetch("http://10.58.0.95:8000/product?sort_by=hot")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          datas: res.product,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.select !== this.state.select) {
      fetch(`http://10.58.0.95:8000/product?sort_by=${obj[this.state.select]}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ datas: res.product })
        });
    }
  }


  render() {
    const { datas } = this.state;

    return (
      <div className="All">
        <div className="allContainer">
          <div className="CategoryHeader">
            <InfoBlock />
            <div className="listFilter">
              <SelectBox2 options={[
                { name: '판매량순' },
                { name: '신상품순' },
                { name: '높은 가격순' },
                { name: '낮은 가격순' },
              ]} clickHandler={this.select} />

              <SelectBox1 options={
                HeaderData.map(el => {
                  return (
                    { name: el.name, src: el.src, srcChange: el.srcChange }
                  )
                })} />
            </div>
          </div>
          <div className="allListContainer">
            {datas && (datas.length > 0) ? <AllList data={datas} /> : ""}
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(All);