import React from "react";
import "./Join.scss";
import Toggle from "../SignUp/Toggle";
import GenderButton from "./GenderButton";
import Lunar from "./Lunar";
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      password_check: "",
      gender: "",
      birthDay: "",
      birthYear: "",
      birthMonth: "",
      lunar: false,
    };
  }

  onClickJoin = () => {
    const {
      email,
      name,
      password,
      gender,
      birthDay,
      birthMonth,
      birthYear,
      lunar,
    } = this.state;
    // 비구조화할당 ㅜ두리님이

    fetch("http://10.58.0.95:8000/account", {
      method: "POST",
      body: JSON.stringify({
        email: email, //문제 없음
        name: name, //문제 없음
        password: password, //문제 없음
        gender: gender,
        birthday: `${birthYear}.${birthMonth}.${birthDay}`, //문제 없음
        lunar: false,
        // {
        // email: "bbc12ddb4@gmail.com",
        // name: "hello",
        // password: "27271263",
        // gender: "woman",
        // birthday: "1993.11.12",
        // lunar: false,
        // }
      }),
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        alert("회원가입 되셨습니다!");
      }
    });
    // .then((res) => {
    //   console.log("this.state", this.state);
    //   console.log("first res", res);
    //   if (res.ok) return res.json();
    //   throw res;
    // })
    // .then((response) => {
    //   console.log("secode res", response);
    //   localStorage.setItem("token", response.token);
    //   alert("회원가입되셨습니다.");
    //   this.props.history.push("/main");
    // });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePW = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handlePWCheck = (e) => {
    this.setState({
      password_check: e.target.value,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlebirthYear = (e) => {
    this.setState({
      birthYear: e.target.vaㅑlue,
    });
  };

  handlebirthMonth = (e) => {
    this.setState({
      birthMonth: e.target.value,
    });
  };

  handlebirthDay = (e) => {
    this.setState({
      birthDay: e.target.value,
    });
  };
  // ------------(젠더)-----------
  handlegender = (value) => {
    this.setState({
      gender: value,
    });
  };

  handlelunar = (value) => {
    this.setState({
      lunar: value,
    });
  };

  // ------------(젠더)-----------
  handleLunar = () => {
    this.setState({
      lunar: !this.state.lunar,
    });
  };

  onClickemail = () => {};

  render() {
    const {
      birthDay,
      birthMonth,
      birthYear,
      gender,
      email,
      lunar,
      name,
      password,
    } = this.state;
    console.log(birthYear, birthMonth, birthDay, gender, email, lunar);
    console.log(name, email, password, gender, lunar);
    console.log(gender, "gender");

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
                <strong
                  onClick={this.onClickemail}
                  limitelengt="4"
                  maxlength="32"
                  className="tf_required"
                >
                  카카오계정 이메일
                </strong>
                <div className="couplediv">
                  <input
                    onChange={this.handleEmail}
                    className="ebox_join"
                    placeholder="이메일주소 입력"
                  ></input>
                  <p className="ximg"></p>
                </div>
                <div class="wrap_btn2">
                  <p class="info_error"></p>
                  <button type="button" class="btn_g">
                    인증메일 발송
                  </button>
                </div>
                <strong className="tf_required">비밀번호입력</strong>
                <input
                  onChange={this.handlePW}
                  className="ebox_join"
                  placeholder="비밀번호  4~32자 "
                ></input>
                <input
                  onChange={this.handlePWCheck}
                  className="ebox_join"
                  placeholder="비밀번호확인"
                ></input>

                <strong className="tf_required">닉네임</strong>
                <input
                  onChange={this.handleName}
                  className="ebox_join"
                  placeholder="닉네임 입력"
                ></input>
                <strong className="tf_required">생일/성별</strong>
                <div className="wow">
                  <div id="select_box">
                    <label></label>
                    <select
                      id="color"
                      title="select color"
                      onChange={this.handlebirthYear}
                      className="year"
                    >
                      <option selected="selected">연도</option>
                      <option>1980</option>
                      <option>1981</option>
                      <option>1982</option>
                      <option>1983</option>
                      <option>1984</option>
                      <option>1985</option>
                      <option>1986</option>
                      <option>1987</option>
                      <option>1988</option>
                      <option>1989</option>
                      <option>1990</option>
                      <option>1991</option>
                      <option>1992</option>
                      <option>1993</option>
                      <option>1994</option>
                      <option>1995</option>
                      <option>1996</option>
                      <option>1997</option>
                    </select>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <select onChange={this.handlebirthMonth} className="month">
                    <option>월</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  &nbsp;&nbsp;&nbsp;
                  <select onChange={this.handlebirthDay} className="day">
                    <option>일</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                  <div className="birthToggle">
                    <Lunar
                      getLunar={this.handleLunar}
                      clicked={this.state.lunar}
                    />
                    음력
                  </div>
                </div>

                <div className="man_wman">
                  <div className="wow">
                    <GenderButton getGender={() => this.handlegender("")} />
                    선택안함
                  </div>
                  <div className="wow">
                    <GenderButton
                      getGender={() => this.handlegender("woman")}
                    />
                    여성
                  </div>
                  <div className="wow">
                    <GenderButton getGender={() => this.handlegender("man")} />
                    남성
                  </div>
                </div>

                <div class="agee-box-join">
                  <button onClick={this.onClickJoin} className="agee-box">
                    다음
                    {/* 다음
                    다음
                    다음
                    다음 */}
                  </button>
                  {/* <button
                        onClick={this.handleLogin}
                        class="loginbutton"
                        type="button"
                      >
                        로그인
                      </button> */}
                </div>
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
