import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './OrderTable.css';

// --- Dummy Data ---
const dummyOrders = [
  { id: 1, product: 'Lorem Ipsum', orderId: '#25426', date: 'Nov 8th, 2023', customer: 'Kavin', status: 'Delivered', amount: '₹200.00', avatar: '/assets/images/avatars/kavin.png' },
  { id: 2, product: 'Lorem Ipsum', orderId: '#25425', date: 'Nov 7th, 2023', customer: 'Kornael', status: 'Canceled', amount: '₹200.00', avatar: '/assets/images/avatars/kornael.png' },
  { id: 3, product: 'Lorem Ipsum', orderId: '#25424', date: 'Nov 6th, 2023', customer: 'Nikhil', status: 'Delivered', amount: '₹200.00', avatar: '/assets/images/avatars/nikhil.png' },
  { id: 4, product: 'Lorem Ipsum', orderId: '#25423', date: 'Nov 5th, 2023', customer: 'Shivam', status: 'Canceled', amount: '₹200.00', avatar: '/assets/images/avatars/shivam.png' },
  { id: 5, product: 'Lorem Ipsum', orderId: '#25422', date: 'Nov 4th, 2023', customer: 'Shadab', status: 'Delivered', amount: '₹200.00', avatar: '/assets/images/avatars/shadab.png' },
  { id: 6, product: 'Lorem Ipsum', orderId: '#25421', date: 'Nov 2nd, 2023', customer: 'Yogesh', status: 'Delivered', amount: '₹200.00', avatar: '/assets/images/avatars/yogesh.png' },
];

const OrderTable = () => {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50'; // Green
      case 'Canceled':
        return '#FF9800'; // Orange
      default:
        return '#777';
    }
  };

  const handleRowClick = (orderId) => {
    // Remove the # symbol from orderId for URL routing
    const cleanOrderId = orderId.replace('#', '');
    navigate(`/admin/orders/${cleanOrderId}`);
  };

  return (
    <div className="order-table-container">
      <header className="table-header">
        <h3 className="table-title">Recent Orders</h3>
        <FiMoreVertical className="menu-icon" />
      </header>

      <div className="table-responsive">
        <table className="order-table">
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all orders" /></th>
              <th>Product</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr 
                key={order.id} 
                className="order-row"
                onClick={() => handleRowClick(order.orderId)}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" aria-label={`Select order ${order.orderId}`} />
                </td>
                <td>{order.product}</td>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>
                  <div className="customer-cell">
                    <img src={order.avatar} alt={order.customer} className="customer-avatar" />
                    <span className="customer-name">{order.customer}</span>
                  </div>
                </td>
                <td>
                  <div className="status-cell">
                    <span 
                        className="status-dot" 
                        style={{ backgroundColor: getStatusColor(order.status) }}
                    ></span>
                    {order.status}
                  </div>
                </td>
                <td className="amount-cell">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
