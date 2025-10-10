import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({ title, amount, total }) => {
  return (
    <div className="dashboard-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">Total amount: {total}</p>
      </div>
      <div className="card-amount">
        {amount}
      </div>
    </div>
  );
};

export default DashboardCard;
