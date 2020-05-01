import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent1.scss';

class CardContent1 extends Component {

    render() {
        const { data } = this.props;

        return (
            <div className="CardContent1">
                {data && (
                    <article className="content">
                        <div className="cardContents">
                            <span className="imgWrap">
                                <img className="imgWrapImg" src={data.theme_image} alt="img" />
                            </span>
                            <div className="detailWrap">
                                <p className="detailTitle"> {data.title}</p>
                                <p className="detailText"> {data.description}</p>
                            </div>
                            <div className="itemListWrap">
                                <ul className="itemListUl">
                                    {data.product.map((item, idx) => (
                                        <li className="itemListLi">
                                            <span className="thumImgWrap">
                                                <img className="thumImg" src={data.product[idx].image} alt="img" />
                                            </span>
                                            <div className="itemWrap">
                                                <p className="itemTitle">{data.product[idx].name}</p>
                                                <div className="cartButton">
                                                    <button className="cartImg"></button>
                                                </div>
                                            </div>
                                            <p className="itemPrice">
                                                <span className="itemPriceNum">{data.product[idx].price.toLocaleString()}</span>
                                                <span className="itemPriceWon">원</span>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                            </div>
                        </div>
                    </article>
                )}
            </div>
        );
    }
}

export default withRouter(CardContent1);

