import React, { Component } from 'react';
import './SelectBox2';
import './SelectBox1.scss';

class SelectBox1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open1: false,
            select: 0,
            check: 1,
        };
    }

    handleOpen1 = () => {
        this.setState({
            open1: !this.state.open1,
        }, console.log(this.state.open1));
    }

    select = (i) => {
        this.setState({
            select: i,
            open1: false,
        });
        // this.props.onChange(this.props.options[i])
    }

    render() {
        const { options } = this.props;
        const { open1, select } = this.state;
        return (
            <div className="SelectBox1">
                <div className="imgOuter" onClick={this.handleOpen1}>
                    <span>{options[select].name}</span>
                    <i className={open1 && 'open1'}></i>
                </div>
                {this.state.open1 && (
                    <ul className="imgOptions">
                        {/* <img className={(this.state.check === options[select].name) ? 'checkImg' : 'list'} src="https://t1.kakaocdn.net/friends/new_store/2.0/common/category_icn-done.png" alt="img" /> */}
                        {options.map((el, i) => (
                            <li key={i} onClick={() => { this.select(i) }}>
                                <img className="imgList" src={el.src} alt="img" />
                                <div className="listName">
                                    <span className="listLink">
                                        {el.name}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default SelectBox1;