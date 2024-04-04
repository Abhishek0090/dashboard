import React from 'react'
import "./Signup.scss";

const Signup = ({ setSwitchAuth }) => {
  return (
    <div className="signup-container">
      <div className="inner-container">
        <h2 className="heading">Sign-Up</h2>
        <div className="inputDivs">
          <input type="text" placeholder="Enter your name" />

          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your password" />
          {/* <button>00</button> */}

          <span className="optionDiv" onClick={() => setSwitchAuth(false)}>
            Already have a Account ?
          </span>
        </div>

        <button className="signupBtn">SignUp</button>
      </div>
    </div>
  );
};

export default Signup;