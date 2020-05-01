import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import MainContents from '../../pages/Home/HomeComponents/MainContents/MainContents';
import Footer from '../../components/Footer/Footer';
import '../../styles/Reset.scss';
import './Home.scss';


let lastScrollY = 0;
let ticking = false;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topButton: false,
      toTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    let screenScroll = window.innerHeight;
    lastScrollY = window.scrollY;
    console.log("screenScroll", screenScroll);

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
        console.log(this.nav.current.style.top);

        this.setState({
          topButton: (lastScrollY > 600),
        })
      });

      ticking = true;
    }
  };

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Home">
        <nav ref={this.nav} />
        <div className={(this.state.topButton) ? 'goTopButton' : 'button'} onClick={this.scrollToTop}></div>
        <Navbar />
        <Menu />
        <MainContents />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);
