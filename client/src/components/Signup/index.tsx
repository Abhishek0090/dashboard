import React from 'react'
import "./Signup.scss";
import Button from '../Button/Button';
import { useNavigate } from 'react-router';

const Signup = ({ setSwitchAuth }) => {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="inner-container">
        <h2 className="heading">
          Sign-Up <hr className="hr-line" />
        </h2>

        <div className="inputDivs">
          <input type="text" placeholder="Enter your name" />

          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your password" />
          {/* <button>00</button> */}

          <span className="optionDiv" onClick={() => setSwitchAuth(false)}>
            Already have a Account ?
          </span>
        </div>

        <Button onClick={() => navigate("/login")}>SignUp</Button>
      </div>
    </div>
  );
};

export default Signup;