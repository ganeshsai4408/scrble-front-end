import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import { adminAPI } from '../services/apiService';
import './AccountsPage.css';

const AccountsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await adminAPI.getUsers();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message);
      // Fallback to dummy data
      setUsers([
        {
          _id: 1,
          email: 'user1@gmail.com',
          name: 'John Doe',
          createdAt: '2023-05-02',
          role: 'user'
        },
        {
          _id: 2,
          email: 'user2@gmail.com',
          name: 'Jane Smith',
          createdAt: '2023-05-03',
          role: 'user'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY format
  };

  return (
    <div className="admin-page-layout">
      {/* The sidebar is fixed */}
      <AdminSidebar activeSection="Accounts" /> 
      
      {/* The main content area */}
      <main className="admin-content" role="main">
        
        {/* Accounts Table Section */}
        <section className="accounts-section">
          <div className="accounts-header">
            <h2 className="accounts-title">Login details</h2>
          </div>
          
          <div className="accounts-table-container">
            <table className="accounts-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Date</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>
                      Loading users...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '2rem' }}>
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{formatDate(user.createdAt)}</td>
                      <td>{user.phone || 'N/A'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AccountsPage;