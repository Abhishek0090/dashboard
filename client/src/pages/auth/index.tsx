import React, { useState } from 'react'
import Signup from '../../components/Signup';
import Login from '../../components/Login';
import "./auth.scss";

const Auth: React.FC = () => {
  const [switchAuth, setSwitchAuth] = useState<boolean>(false);

  return (
    <div className="main-container">
      <div className="container">
        {switchAuth ? (
          <Signup setSwitchAuth={setSwitchAuth} />
        ) : (
          <Login setSwitchAuth={setSwitchAuth} />
        )}
      </div>
    </div>
  );
};

export default Auth;