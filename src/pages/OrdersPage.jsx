import React from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import OrderTable from '../components/admin/OrderTable';
import './OrdersPage.css';

const OrdersPage = () => {
  return (
    <div className="admin-page-layout">
      {/* The sidebar is fixed */}
      <AdminSidebar activeSection="Orders" /> 
      
      {/* The main content area */}
      <main className="admin-content" role="main">
        
        {/* Orders Table Section */}
        <section className="orders-table-section">
          <OrderTable />
        </section>

      </main>
    </div>
  );
};

export default OrdersPage;