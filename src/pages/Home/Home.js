import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.scss';
import Categories from '../../components/Categories/Categories';
import MainContents from '../../components/MainContents/MainContents';
import Menu from '../../components/Menu/Menu';


class Home extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Categories />
        <Menu />
        <MainContents />
        <Footer />
      </div>
    )
  }
}
export default withRouter(Home);