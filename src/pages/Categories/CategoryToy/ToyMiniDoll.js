import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import ToyBanner from './ToyBanner/ToyBanner';
import CategoryLists from "../../../components/CategoryLists/CategoryLists";
import Footer from "../../../components/Footer/Footer";
import ItemLists from "../../../components/ItemLists/ItemLists";
import { API } from "../../../config";
import "./ToyMiniDoll.scss";

class ToyMiniDoll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount = () => {
    fetch(`${API}/product/subCategory/10`)
    .then( res => res.json())
    .then( res => {
      this.setState({
        items: res.product
      })
    })
  }

  render() {
    return (
      <div className="ToyMiniDoll">
        <NavBar />
        <ToyBanner />
        <CategoryLists />
        <ItemLists items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ToyMiniDoll);
