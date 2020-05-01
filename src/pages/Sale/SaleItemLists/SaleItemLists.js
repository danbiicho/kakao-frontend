import React, { Component } from "react";
import ItemLists from "../../../components/ItemLists/ItemLists";
import { API } from "../../../config";
import "./SaleItemLists.scss";

class SaleItemLists extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentDidMount = () => {
   fetch(`${API}/product/saleProduct`)
   .then((res) => res.json())
   .then((res) => {
     this.setState({ 
       items: res.sale_item
     })
   })
  }
  

  render() {
    return(
      <div className="SaleItemLists">
        <div className="newSubject">
          <p className="topNewSubject">세일 상품을 모두 한 곳에</p>
          <p className="bottomNewSubject">지금은 세일 중</p>
        </div>
        <div className="ItemLists">
        <ItemLists items={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default SaleItemLists;