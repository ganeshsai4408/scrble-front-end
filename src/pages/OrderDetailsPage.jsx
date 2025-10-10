import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import './OrderDetailsPage.css';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Sample order data - using the orderId from URL params
  const displayOrderId = orderId ? `#${orderId}` : '#25743';
  const orderData = {
    orderId: displayOrderId,
    status: 'Pending',
    date: 'Feb 16,2022 - Feb 25,2022',
    customer: {
      name: 'Shivani Singh',
      email: 'shivani@gmail.com',
      phone: '+91 964 231 1212'
    },
    orderInfo: {
      shippingAddress: 'Next Express',
      paymentMethod: 'Paypal',
      status: 'Pending'
    },
    deliverTo: {
      address: 'Ashirwad Dharam Colony, Patan Vesal, Gurgaon',
      state: 'Haryana'
    },
    paymentInfo: {
      cardNumber: '•••• •••• •••• 4017',
      businessName: 'Shivani Singh',
      phone: '+91 964 231 1212'
    }
  };

  return (
    <div className="admin-page-layout" style={{ backgroundColor: '#FCF3F8' }}>
      <AdminSidebar activeSection="Orders" />
      
      <main className="admin-content" role="main" style={{ marginLeft: '280px', padding: '2rem', backgroundColor: '#FCF3F8' }}>
        <div className="order-details-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Header */}
          <div className="order-details-header">
            <button 
              className="back-button"
              onClick={() => navigate('/admin/orders')}
            >
              ← Back to Orders
            </button>
            <h1 className="page-title">Order Details</h1>
          </div>

          {/* Order Status Card */}
          <div className="order-status-card">
            <div className="order-id-section">
              <span className="order-label">Orders ID:</span>
              <span className="order-id">{orderData.orderId}</span>
              <span className="status-badge pending">{orderData.status}</span>
            </div>
            <div className="order-date">
              <span className="date-icon">📅</span>
              <span>{orderData.date}</span>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="info-cards-grid">
            
            {/* Customer Card */}
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon customer-icon">C</div>
                <h3>Customer</h3>
              </div>
              <div className="card-content">
                <p className="customer-name">Full Name: {orderData.customer.name}</p>
                <p className="customer-email">Email: {orderData.customer.email}</p>
                <p className="customer-phone">Phone: {orderData.customer.phone}</p>
              </div>
            </div>

            {/* Order Info Card */}
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon order-icon">O</div>
                <h3>Order info</h3>
              </div>
              <div className="card-content">
                <p>Shipping: {orderData.orderInfo.shippingAddress}</p>
                <p>Payment Method: {orderData.orderInfo.paymentMethod}</p>
                <p>Status: {orderData.orderInfo.status}</p>
              </div>
            </div>

            {/* Deliver To Card */}
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon deliver-icon">D</div>
                <h3>Deliver to</h3>
              </div>
              <div className="card-content">
                <p>Address: {orderData.deliverTo.address}</p>
                <p>{orderData.deliverTo.state}</p>
              </div>
            </div>

          </div>

          {/* Payment Info Section */}
          <div className="payment-info-section">
            <h3>Payment Info</h3>
            <div className="payment-card">
              <div className="payment-method">
                <span className="card-icon-small">💳</span>
                <span>Master Card •••• •••• •••• 4017</span>
              </div>
              <p>Business name: {orderData.paymentInfo.businessName}</p>
              <p>Phone: {orderData.paymentInfo.phone}</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OrderDetailsPage;