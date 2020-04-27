import React from "react";
import "./Join.scss";
import Toggle from "../SignUp/Toggle";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      checkbox: "",
    };
  }

  handleChage = (event) => {
    this.setState({ checkbox: event.target.value });

    console.log(event.target.value);
  };

  render() {
    return (
      <body>
        <div className="account_comm_signup">
          <div className="kakaoWrap_signup_j">
            <div className="mArticle_signup"></div>
          </div>
          <Toggle />

          <div className="box1_join">
            <span class="ir_wa">kakao</span>
          </div>
          <div className="BicBox">
            <div className="box2_join">
              <div className="page-active ">
                <h2 className="tit_step">카카오계정 정보를 입력해주세요</h2>
                <strong className="tf_required">카카오계정 이메일</strong>
                <input
                  className="ebox_join"
                  placeholder="이메일주소 입력"
                ></input>
                <div class="wrap_btn2">
                  <p class="info_error"></p>
                  <button type="button" class="btn_g">
                    인증메일 발송
                  </button>
                </div>
                b
              </div>
            </div>
          </div>

          {/* -------footer--------open---- */}
          <div className="footer_comm_j">
            <div className="leg">
              <a
                class="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                이용약관
              </a>
              <a
                class="jinds2"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                개인정보 처리방침
              </a>
              <a
                class="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                운영정책
              </a>
              <a
                class="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                고객센터
              </a>
              <a
                class="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                공지사항
              </a>
              <a
                class="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                한국어
              </a>
            </div>
            <div className="KK">
              <p>Coyright ©</p>
              <a href="https://www.kakaocorp.com/?lang=ko" class="link_kakao">
                Kakao Corp.
              </a>
              <p>apdjshfajdhsf</p>
            </div>
          </div>

          {/* -------footer--------close---- */}
        </div>
      </body>
    );
  }
}

export default SignUp;
