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

        if (lastScrollY > 600) {
          this.setState({
            topButton: true,
          })
        } else {
          this.setState({
            topButton: false,
          })
        }
      });

      ticking = true;
    }
  };

  render() {
    return (
      <div className="Home">
        <nav ref={this.nav} />
        <div className={(this.state.topButton) ? 'goTopButton' : 'button'}></div>
        <Navbar />
        <Menu />
        <MainContents />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);
