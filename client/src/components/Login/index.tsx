import React from 'react'
import "./Login.scss";
import Button from '../Button/Button';
import { useNavigate } from 'react-router';

 

const Login = ({ setSwitchAuth }) => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="inner-container">
        <h2 className="heading">Login <hr className='hr-line'/></h2>
        <div className="inputDivs">
          <input type="text" placeholder="Enter your email" />

          <input type="text" placeholder="Enter your password" />
          {/* <button>00</button> */}

          <span className="optionDiv" onClick={() => setSwitchAuth(true)}>
            Dont have a Account ?
          </span>
        </div>

        <Button onClick={() => navigate("/dashboard")}>Login</Button>
      </div>
    </div>
  );
};

export default Login;