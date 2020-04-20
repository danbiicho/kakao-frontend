import React from 'react'
import './Login.scss';

class Login extends React.Component{

    render(){
        
        return(
            <div className = "login-page">로그인페이지
            <button> 가입하디</button> 
            </div>



        )

    }



}

export default Login;

// 리액트에서 커스텀 태그링 컴포넌트를 만들때 class를 꼭 써야 한다. extends는 확장자라는 의미이다.