import React, { Component } from 'react';
import './AllList.scss';
import { API } from '../../config';

class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
            cart: false,
        };
    }

    handleCart = (i) => {
        this.setState({
            idx: i,
            cart: true,
        });
    }

    render() {
        const { data } = this.props;
        return (
            data.map((product, index) => (
                <div className="AllList">
                    <li className="allWrap">
                        <img className="allImg" src={product.image_url} alt="img" />
                        <p className="allItemTitle">{product.name}

                            <span className="allCartButton">
                                <button className="allcartImg" key={index} className={(this.state.idx === index) ? 'cartOn' : 'cartOff'} onClick={() => { this.handleCart(index) }} />
                            </span>
                        </p>
                        <span className="allItemCost">{product.price.toLocaleString()}원</span>

                        <div className="opacityWrap"></div>
                        <div className="allItemLabel">
                            <span className="itemLabel">
                                {index + 1}
                            </span>
                        </div>
                    </li>
                </div>
            )
            )



        )
    }
}

export default AllList;