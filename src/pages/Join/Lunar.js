import React from "react";

class Lunar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    //this를 사용하기 위해서 bind를 해주어야 합니다.
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <p onClick={this.props.getLunar}>
        {this.props.clicked ? (
          <span class="ico_account_on"></span>
        ) : (
          <span class="ico_account"></span>
        )}
      </p>
    );
  }
}
export default Lunar;
