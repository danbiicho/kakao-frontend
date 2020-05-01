import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './CardContent2.scss';

class CardContent2 extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="CardContent2">
                {data && (
                    <article className="content">
                        <div className="cardContents">
                            <span className="imgWrap">
                                <img className="imgWrapImg" src={data.theme_image} alt="" />
                            </span>
                            <div className="detailWrap"> <p className="detailTitle">{data.title}</p>
                                <p className="detailText">{data.description}</p>
                            </div>
                            <div className="listWrap">
                                <ul className="itemLisRowUl">
                                    {data.product.map((item, idx) => (
                                        <li className="itemListRowLi">
                                            <a className="itemListA" href="/">
                                                <span className="item">
                                                    <img className="itemImg" src={data.product[idx].image} alt="" />
                                                </span>
                                                <div className="itemInfoWrap">
                                                    <div className="listTitle">
                                                        <p className="listTitle_p">
                                                            {data.product[idx].name}
                                                        </p>
                                                    </div>
                                                    <div className="priceArea">        <span className="priceAreaPrice">{data.product[idx].price.toLocaleString()}</span>
                                                        <span className="priceAreaWon">원</span>
                                                    </div>
                                                    <div className="or" /> <div className="cartButton">
                                                        <button className="cartImg"></button>
                                                    </div>
                                                </div>
                                            </a>
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

export default withRouter(CardContent2);