import React from 'react'
import "./Sidebar.scss";

const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: "",
  },
  {
    id: 2,
    title: "Projects",
    icon: "",
  },
  {
    id: 3,
    title: "Contact",
    icon: "",
  },
  {
    id: 4,
    title: "About",
    icon: "",
  },
];

const Sidebar = () => {



  return (
    <div className="sidebar-container">
      <div className='inner-side-container'>
        {
          sidebarData.map((ele)=>{
            return (
              <div key={ele.id} className="sidebar-content">
                {ele.title}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Sidebar