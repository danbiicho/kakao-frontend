import React, { Component } from 'react';
import './AllList.scss';

class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        };
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/data/AllLists.json")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    datas: res.allListItem,
                });
            });
    }


    render() {
        const { datas } = this.state;
        return (
            datas.map((data, index) => (
                <div className="AllList">
                    <li className="allWrap">
                        <img className="allImg" src={data.src} alt="img" />
                        <p className="allItemTitle">{data.name}

                            <span className="allCartButton">
                                <button className="allcartImg"></button>
                            </span>
                        </p>
                        <span className="allItemCost">{data.cost}</span>

                        <div className="opacityWrap"></div>
                        <div className="allItemLabel">
                            <span className="itemLabel">
                                {data.rank}
                            </span>
                        </div>
                    </li>
                </div>
            ))

        );
    }
}

export default AllList;