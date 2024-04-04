import React from 'react'
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import "./dashboard.scss"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      {/* Navbar */}
      <div className='sidebar-con'>
        <Sidebar />
      </div>
      {/* Main Div */}
      <div className='main-cont'>
        <div>
          <Navbar />
        </div>
        <div>
          <div>hi bro</div>
          <div>hi bro</div>
          <div>hi bro</div>
          <div>hi bro</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;