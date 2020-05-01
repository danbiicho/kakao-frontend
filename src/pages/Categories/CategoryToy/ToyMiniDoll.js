import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";
import ToyBanner from './ToyBanner/ToyBanner';
import CategoryLists from "../../../components/CategoryLists/CategoryLists";
import InfoBlock from "../../../components/CategoryHeader/InfoBlock";
import SelectBox1 from "../../../components/SelectBox/SelectBox1";
import SelectBox2 from "../../../components/SelectBox/SelectBox2";
import HeaderData from "../../../components/CategoryHeader/CategoryHeaderData"
import ItemLists from "../../../components/ItemLists/ItemLists";
import Footer from "../../../components/Footer/Footer";
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
        items: res.product.slice(0, 40)
      })
    })
  }

  render() {
    return (
      <div className="ToyMiniDoll">
        <NavBar />
        <ToyBanner />
        <CategoryLists />
        <div className="CategoryHeader">
          <InfoBlock />
          <div className="listFilter">
            <SelectBox2 options={[
              { name: "판매량순"},
              { name: "신상품순"},
              { name: "낮은 가격순"},
              { name: "높은 가격순"}
            ]} clickHandler={this.select}/>
            <SelectBox1 options={
                    HeaderData.map(el => {
                      return (
                        { name: el.name, src: el.src, srcChange: el.srcChange }
                      )
                    })} />
          </div>
        </div>
        <ItemLists items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ToyMiniDoll);
