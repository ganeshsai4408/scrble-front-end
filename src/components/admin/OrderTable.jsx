import React, { useState, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { adminAPI } from '../../services/apiService';
import './OrderTable.css';

const OrderTable = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getOrders();
      setOrders(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err.message);
      // Fallback to dummy data
      setOrders([
        { 
          _id: '1', 
          items: [{ name: 'Lorem Ipsum' }], 
          createdAt: '2023-11-08', 
          user: { name: 'Kavin' }, 
          orderStatus: 'Delivered', 
          totalPrice: 200 
        },
        { 
          _id: '2', 
          items: [{ name: 'Lorem Ipsum' }], 
          createdAt: '2023-11-07', 
          user: { name: 'Kornael' }, 
          orderStatus: 'Cancelled', 
          totalPrice: 200 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50'; // Green
      case 'Cancelled':
      case 'Canceled':
        return '#FF9800'; // Orange
      case 'Processing':
        return '#2196F3'; // Blue
      case 'Shipped':
        return '#9C27B0'; // Purple
      case 'Pending':
        return '#FF9800'; // Orange
      default:
        return '#777';
    }
  };

  const handleRowClick = (orderId) => {
    navigate(`/admin/orders/${orderId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="order-table-container">
        <header className="table-header">
          <h3 className="table-title">Recent Orders</h3>
        </header>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          Loading orders...
        </div>
      </div>
    );
  }

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
            {orders.slice(0, 10).map((order) => (
              <tr 
                key={order._id} 
                className="order-row"
                onClick={() => handleRowClick(order._id)}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" aria-label={`Select order ${order._id}`} />
                </td>
                <td>{order.items[0]?.name || 'Product'}</td>
                <td>#{order._id.slice(-6)}</td>
                <td>{formatDate(order.createdAt)}</td>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">
                      {order.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <span className="customer-name">{order.user?.name || 'Unknown'}</span>
                  </div>
                </td>
                <td>
                  <div className="status-cell">
                    <span 
                        className="status-dot" 
                        style={{ backgroundColor: getStatusColor(order.orderStatus) }}
                    ></span>
                    {order.orderStatus}
                  </div>
                </td>
                <td className="amount-cell">₹{order.totalPrice?.toLocaleString() || '0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
