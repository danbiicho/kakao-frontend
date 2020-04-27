import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //this를 사용하기 위해서 bind를 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <p onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <span class="ico_account"></span>
        ) : (
          <span class="ico_account_on"></span>
        )}
      </p>
    );
  }
}
export default Toggle;
