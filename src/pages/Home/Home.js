import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import MainContents from '../../pages/Home/HomeComponents/MainContents/MainContents';
import Footer from '../../components/Footer/Footer';
import '../../styles/Reset.scss';
import './Home.scss';


// let lastScrollY = 0;
// let ticking = false;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topButton: false,
    };
    // this.nav = React.createRef();
  }

  componentDidMount = () => {
    // try {
    //   console.log('nav', this.nav)
    //   console.log('style', this.nav.current.style)
    // } catch (err) {
    //   console.error(err)
    // }
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    let lastScrollY = window.scrollY;
    this.setState({
      topButton: (lastScrollY > 600),
    });
  };
  // let screenScroll = window.innerHeight;

  // console.log('aaaaa', this?.nav?.current?.style?.top)
  // try {
  // this.nav.current.style.top = `${lastScrollY}px`;
  //   console.log('nav', this.nav)
  //   console.log(this.nav.current.style)
  // } catch (err) {
  //   console.error(err)
  //   console.log(this.nav)
  // }


  // console.log("screenScroll", screenScroll);

  // if (!ticking) {
  // window.requestAnimationFrame(() => {
  // this.nav.current &&
  // console.log({ nav: this.nav });
  // ticking = false;
  // console.log(this.nav.current.style.top);

  // });

  // ticking = true;
  // }

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
