import React, { Component } from 'react';
import './AllList.scss';
import { API } from '../../config';

class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount = () => {
        fetch(`${API}/product?sort_by=hot`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.hot_product,
                });
            });
    }


    render() {
        const { datas } = this.state;
        return (
            datas.map((data, index) => (
                <div className="AllList">
                    <li className="allWrap">
                        <img className="allImg" src={data.image_url} alt="img" />
                        <p className="allItemTitle">{data.name}

                            <span className="allCartButton">
                                <button className="allcartImg"></button>
                            </span>
                        </p>
                        <span className="allItemCost">{data.price}</span>

                        <div className="opacityWrap"></div>
                    </li>
                </div>
            ))

        );
    }
}

export default AllList;