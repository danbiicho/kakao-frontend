import React from "react";
import "./Login.scss";

class Login extends React.Component {
  // --------여기 함수 만들기 ------------

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  //  ES6 브라우져가 호풀한다. 괄호 인자르(event)
  handleChage = (event) => {
    this.setState({ email: event.target.value });

    console.log(event.target.value);
  };

  handePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleclick = () => {
    console.log("email ====>", this.state.email);
    console.log("password ====>", this.state.password);
  };

  // --------여기 함수 만들기 ------------
  render() {
    return (
      <body>
        <div className="kakao.Wap">
          <div
            class="km-page-active"
            data-url="pageLogin"
            data-account-type="login_type3"
          >
            <div className="All-main-box">
              <div className="mAarticle">
                <div className="login_banner">
                  <div className="wrap_banner">
                    <div>
                      <div className="info_banner">
                        <strong className="tit_banner">
                          카카오계정 하나로 충분합니다.
                        </strong>
                        <p className="desc_banner">
                          Kakao의 서비스 뿐 아니라 Melon,Daum등 다른 다양한
                          서비스까지
                          <br></br>
                          이제 카카오계정으로 이용해 보세요!
                        </p>
                      </div>
                      <img
                        src="https://accounts.kakao.com/assets/weblogin/techin/retina/banner_login1-e49229b7decc6581f6de0c19822f252e.png"
                        width="540"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* ------------- */}
                  <div className="wrap_form">
                    <h1 id="kakaoServiceLogo">
                      <span class="ir_wa">kakao</span>
                    </h1>
                    <div>
                      <input
                        onChange={this.handleChage}
                        className="idbox"
                        type="text"
                        placeholder="카카오계정 (이메일 또는 전화번호)"
                      ></input>
                    </div>
                    <div>
                      <input
                        onChange={this.handePassword}
                        className="idbox"
                        type="password"
                        placeholder="비밀번호"
                      ></input>

                      <div class="set_login">
                        <button class="loginhold">V</button>

                        <div>로그인 상태 유지</div>
                      </div>
                      <button
                        onClick={this.handleclick}
                        class="loginbutton"
                        type="button"
                      >
                        로그인
                      </button>
                      <div class="joinpox">
                        <div>
                          <a
                            class="jinds"
                            href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
                          >
                            회원가입
                          </a>
                        </div>
                        <div class="a23">
                          <a
                            class="jinds"
                            href="https://accounts.kakao.com/weblogin/create_account?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
                          >
                            카카오계정
                          </a>
                          <a>&nbsp;|&nbsp;</a>
                          <a
                            class="jinds"
                            href="https://accounts.kakao.com/weblogin/find_password?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3D1737d9990c3a695cd5e7a3252b3c7003%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fstore.kakaofriends.com%252Fauth%252Fkakao%26state%3D4f89f251-5c97-4f9a-a34e-83b86c3c3cdd"
                          >
                            비밀번호 찾기
                          </a>
                        </div>
                      </div>
                    </div>
                    <fieldset className="fld_login"></fieldset>
                  </div>
                  <img
                    url="/assets/weblogin/techin/ico_account_200221.png"
                    alt=""
                  />

                  {/* ------------- */}
                </div>
              </div>
            </div>
          </div>
          {/* -------footer--------open---- */}
          <div className="footer_comm">
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

export default Login;

// 리액트에서 커스텀 태그링 컴포넌트를 만들때 class를 꼭 써야 한다. extends는 확장자라는 의미이다.
