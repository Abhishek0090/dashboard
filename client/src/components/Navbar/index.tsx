import React from 'react'
import "./Navbar.scss";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {
const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="left-container">
        <img src="" />
        <h2 className='current-head'>Dashboard</h2>
      </div>
      <div className="right-container">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/login")}>Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;