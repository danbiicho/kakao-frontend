import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Categories from '../../components/Categories/Categories';
import Menu from '../../components/Menu/Menu';
import MainContents from '../../pages/Home/HomeComponents/MainContents/MainContents';
import Footer from '../../components/Footer/Footer';
import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import '../../styles/Reset.scss';
import './Home.scss';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Categories />
        <Menu />
        <MainContents />
        <Footer />
        <CategoryHeader />
      </div>
    );
  }
}
export default withRouter(Home);
