import React from 'react'
import "./Login.scss";

 

const Login = ({ setSwitchAuth }) => {
  return (
    <div className="login-container">
      <div className="inner-container">
        <h2 className="heading">Login</h2>
        <div className="inputDivs">
          <input type="text" placeholder="Enter your email" />

          <input type="text" placeholder="Enter your password" />
          {/* <button>00</button> */}

          <span className="optionDiv" onClick={() => setSwitchAuth(true)}>
            Dont have a Account ?
          </span>
        </div>

        <button className="loginBtn">Login</button>
      </div>
    </div>
  );
};

export default Login;