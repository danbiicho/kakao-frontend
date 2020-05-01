import React from "react";

class Agree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

    //this를 사용하기 위해서 bind를 해주어야 합니다.
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <p onClick={() => this.props.getAgree()}>
        {this.props.clicked ? (
          <span class="ico_account_on"></span>
        ) : (
          <span class="ico_account"></span>
        )}
      </p>
    );
  }
}
export default Agree;
