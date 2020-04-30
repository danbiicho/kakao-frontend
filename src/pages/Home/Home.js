import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import MainContents from '../../pages/Home/HomeComponents/MainContents/MainContents';
import New from "../New/New";
import Hot from "../Hot/Hot";
import Sale from "../Sale/Sale";
import All from "../All/All";
import Footer from '../../components/Footer/Footer';
import '../../styles/Reset.scss';
import './Home.scss';

const obj = {
  0: <MainContents/>,
  1: <New/>,
  2: <Hot/>,
  3: <Sale/>,
  4: <All/>,
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      acitveTabId: 0,
    }
  }

  getMenu = (acitveTabId) => {
    this.setState({acitveTabId})
  }

  render() {
    console.log(this.state.acitveTabId)
    return (
      <div>
        <Navbar />
        <Menu onUpdateChild={this.getMenu} {...this.state.acitveTabId}/>
        {obj[this.state.acitveTabId]}
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);