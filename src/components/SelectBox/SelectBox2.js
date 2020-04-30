import React, { Component } from 'react';
import './SelectBox1';
import './SelectBox2.scss';

class SelectBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open2: false,
            select: 0,
        };
    }

    handleOpen2 = () => {
        this.setState({
            open2: !this.state.open2,
        });
    }

    select = i => {
        this.setState({
            select: i,
            open2: false,
        });
        //this.props.onChange(this.props.options[i])
    }

    render() {
        const { options } = this.props;
        const { open2, select } = this.state;
        return (
            <div className="SelectBox2">
                <div className="outer" onClick={this.handleOpen2}>
                    <span>{options[select].name}</span>
                    <i className={open2 && 'open2'}></i>
                </div>
                {this.state.open2 && (
                    <ul className="options">
                        {options.map((el, i) => (
                            <li key={i}>
                                <button className="listLink" onClick={() => { this.select(i) }}>
                                    {el.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default SelectBox2;