import React from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardCard from './DashboardCard';
import OrderTable from './OrderTable';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Dummy data for cards
  const cardData = [
    { title: 'Total Orders', amount: 47, total: '5000' },
    { title: 'Active Orders', amount: 47, total: '5000' },
    { title: 'Completed Orders', amount: 47, total: '5000' },
    { title: 'Return/Exchange Orders', amount: 47, total: '5000' },
  ];

  return (
    <div className="admin-page-layout">
      {/* The sidebar is fixed */}
      <AdminSidebar activeSection="Dashboard" /> 
      
      {/* The main content area */}
      <main className="admin-content" role="main">
        
        {/* Recent Orders Table at the top */}
        <section className="orders-table-section">
          <OrderTable />
        </section>

        {/* Bottom Cards Section */}
        <section className="dashboard-cards-grid">
          {cardData.map((data, index) => (
            <DashboardCard 
              key={index}
              title={data.title}
              amount={data.amount}
              total={data.total}
            />
          ))}
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
