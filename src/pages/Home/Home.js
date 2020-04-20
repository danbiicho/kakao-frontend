import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Categories from '../../components/Categories/Categories';
import './Home.scss';


class Home extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Categories />
        <Footer />
      </div>
    )
  }
}
export default withRouter(Home);