import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import DashboardCard from './DashboardCard';
import OrderTable from './OrderTable';
import { adminAPI } from '../../services/apiService';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getDashboardStats();
      setDashboardData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError(err.message);
      // Fallback to dummy data
      setDashboardData({
        stats: { totalRevenue: 0, totalOrders: 47 },
        totalUsers: 120,
        totalProducts: 25,
      });
    } finally {
      setLoading(false);
    }
  };

  // Calculate card data from API response
  const cardData = dashboardData ? [
    { 
      title: 'Total Orders', 
      amount: dashboardData.stats.totalOrders, 
      total: dashboardData.stats.totalRevenue?.toLocaleString() || '0' 
    },
    { 
      title: 'Active Users', 
      amount: dashboardData.totalUsers, 
      total: dashboardData.totalUsers?.toString() || '0' 
    },
    { 
      title: 'Total Products', 
      amount: dashboardData.totalProducts, 
      total: dashboardData.totalProducts?.toString() || '0' 
    },
    { 
      title: 'Revenue', 
      amount: Math.round(dashboardData.stats.totalRevenue || 0), 
      total: '₹' + (dashboardData.stats.totalRevenue?.toLocaleString() || '0') 
    },
  ] : [];

  if (loading) {
    return (
      <div className="admin-page-layout">
        <AdminSidebar activeSection="Dashboard" />
        <main className="admin-content" role="main">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div>Loading dashboard data...</div>
          </div>
        </main>
      </div>
    );
  }

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
