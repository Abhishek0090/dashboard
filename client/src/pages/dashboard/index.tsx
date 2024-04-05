import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import "./dashboard.scss"
import { getAllData } from "../../apis/api"; 
import Card from '../../components/Card';

const Dashboard = () => {

  const [data, setData] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await getAllData("https://dummyjson.com/products");
        setData(response.products)
      } catch (error) {
          console.log(error);
      }
    }
    fetchData()
  },[])

  console.log(data)

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="sidebar-con">
        <Sidebar />
      </div>
      {/* Main Div */}
      <div className="main-cont">
        <div className='nav-cont'>
          <Navbar />
        </div>
        <div className='card-cont'>
          {/* {data?.map((item) => (
            <div>{item?.title}</div>
          ))} */}
          {[...Array(9)].map((_, idx) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;