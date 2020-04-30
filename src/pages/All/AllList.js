import React, { Component } from 'react';
import './AllList.scss';
import { API } from '../../config';

class AllList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            select: "",
        };
    }

    componentDidMount = () => {
        fetch("http://10.58.0.95:8000/product?sort_by=hot")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.hot_product,
                });
            });
    }


    render() {
        const { datas } = this.state;

        // const fomatter = new 
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
                        <span className="allItemCost">{data.price.toLocaleString()}원</span>

                        <div className="opacityWrap"></div>
                        <div className="allItemLabel">
                            <span className="itemLabel">
                                {index + 1}
                            </span>
                        </div>
                    </li>
                </div>
            ))

        );
    }
}

export default AllList;