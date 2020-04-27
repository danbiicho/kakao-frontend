import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import MainContents from '../../pages/Home/HomeComponents/MainContents/MainContents';
import Footer from '../../components/Footer/Footer';
// import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import Hot from '../Hot/Hot';
import '../../styles/Reset.scss';
import './Home.scss';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
        <MainContents />
        <Footer />
        {/* <CategoryHeader /> */}
        <Hot />
      </div>
    );
  }
}
export default withRouter(Home);
