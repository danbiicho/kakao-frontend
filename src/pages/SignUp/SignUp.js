import React from "react";
import "./SignUp.scss";
import CustomButton from "./CustomButtom";
import Toggle from "./Toggle";
import Agree from "./Agree";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      checkbox: "",
      agree: false,
    };
  }

  onClickJoin = () => {
    // 비구조화할당 ㅜ두리님이

    fetch("http://10.58.0.95:8000/account", {
      method: "POST",
      body: JSON.stringify({
        agree: false,
      }),
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        alert("동의하셨습니다!");
      }
    });
  };

  handleAgree = (value) => {
    this.setState({
      agree: value,
    });
  };
  handleAgree = () => {
    this.setState({
      agree: !this.state.agree,
    });
  };

  handleChage = (event) => {
    this.setState({ checkbox: event.target.value });

    console.log(event.target.value);
  };

  render() {
    return (
      <body>
        <div className="account_comm_signup">
          <div className="kakaoWrap_signup">
            <div className="mArticle_signup"></div>
          </div>
          <div className="c_main">
            <div className="box1_signup">
              <span class="ir_wa">kakao</span>
            </div>
            <div className="box2_signup">
              <div className="box3_signup">
                <h2 class="tit_step">
                  카카오계정 서비스약관에<br></br> 동의해주세요.
                </h2>
                <div className="tem_check">
                  <div className="under-bar">
                    <agree />
                    <div className="middle-agree-0">모두 동의합니다.</div>
                  </div>

                  <p className="desc_checkall">
                    전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                    <br></br>
                    개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한
                    <br></br>
                    동의를 거부하시는 경우에도 서비스는 이용이 가능합니다.
                    <br></br>
                  </p>

                  <div className="chckbox-list-1">
                    <div className="chckbox-list">
                      <div className="under-bar-up">
                        <div className="under-bar">
                          <Toggle />
                          <div className="middle-agree">
                            만 14세 이상입니다.
                          </div>
                        </div>
                      </div>

                      <div className="under-bar">
                        <Toggle />
                        <div className="middle-agree">
                          [필수]카카오계정 약관
                        </div>
                      </div>

                      <div className="under-bar">
                        <Agree
                          getAgree={this.handleAgree}
                          clicked={this.state.agree}
                        />
                        <div className="middle-agree">
                          [필수]개인정보 수집 및 이용 동의{" "}
                        </div>
                      </div>

                      <div className="under-bar">
                        <Toggle />
                        <div className="middle-agree">
                          [필수]프로필 정보 추가 수집 동의
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={this.onClickJoin} className="agee-box">
                동의
              </button>
            </div>
          </div>
          {/* -------footer--------open---- */}
          <div className="footer_comm_signup">
            <div className="leg">
              <a
                className="jinds"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                이용약관
              </a>
              <a
                className="jinds2"
                href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
              >
                개인정보 처리방침
              </a>
              <a
                className="jinds"
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
            </div>
          </div>
          {/* -------footer--------close---- */}
        </div>
      </body>
    );
  }
}

export default SignUp;
