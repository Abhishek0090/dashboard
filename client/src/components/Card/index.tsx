import React from 'react'
import "./Card.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-heading">
        <h2>Check</h2>
        <hr className='hr-line'/>
      </div>
      <div className="card-description">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="girl"
          className="img-cont "
        />
        <div>Hi bro whatsapp</div>
      </div>
    </div>
  );
};

export default Card;