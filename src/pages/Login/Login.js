import React from "react";
import "./Login.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="kakao.Wap">
        <div
          class="km-page-active"
          data-url="pageLogin"
          data-account-type="login_type3"
        >
          <div className="mAarticle">
            <div className="login_banner">
              <div className="wrap_banner">
                <div className="info_banner">
                  <strong className="tit_banner">
                    카카오계정 하나로 충분합니다.
                  </strong>
                  <p className="desc_banner">
                    Kakao의 서비스 뿐 아니라 Melon,Daum등 다른 다양한 서비스까지
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
              {/* ------------- */}
              <div className="wrap_form">
                <h1 id="kakaoServiceLogo">
                  <span class="ir_wa">kakao</span>
                </h1>
                <fieldset className="fld_login">
                  <legend class="screen_out">카카오 계정 로그인 폼</legend>
                  <input type="hidden" name="type" value="w"></input>
                  <input
                    type="hidden"
                    name="p"
                    s
                    value="UVpj3f9lbDZIXiIZdbsWxRTfc-XoWD81TlBAHPzuRuc"
                  ></input>
                  <input
                    type="hidden"
                    name="continue"
                    value="https://kauth.kakao.com/oauth/authorize?client_id=1737d9990c3a695cd5e7a3252b3c7003&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fstore.kakaofriends.com%2Fauth%2Fkakao&amp;state=6ec6f9cc-d25e-4716-b0bf-28d989570f60"
                  ></input>
                  <input type="hidden" name="service" value=""></input>
                  <label for="id_email_2" class="lab_g lab_placeholder lab_txt">
                    카카오계정 (이메일 또는 전화번호)
                  </label>
                </fieldset>
              </div>

              {/* ------------- */}
            </div>
          </div>
          <div className="footer_comm"></div>
        </div>
      </div>
    );
  }
}

export default Login;

// 리액트에서 커스텀 태그링 컴포넌트를 만들때 class를 꼭 써야 한다. extends는 확장자라는 의미이다.
