import React from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import './AccountsPage.css';

const AccountsPage = () => {
  // Dummy data for user accounts
  const accountsData = [
    {
      id: 1,
      email: 'puspalak@gmail.com',
      fullName: 'pravalika',
      date: '2-05-20225',
      phoneNumber: '123456789'
    },
    {
      id: 2,
      email: 'puspalak@gmail.com',
      fullName: 'pravalika',
      date: '2-05-20225',
      phoneNumber: '123456789'
    },
    {
      id: 3,
      email: 'puspalak@gmail.com',
      fullName: 'pravalika',
      date: '2-05-20225',
      phoneNumber: '123456789'
    },
    {
      id: 4,
      email: 'puspalak@gmail.com',
      fullName: 'pravalika',
      date: '2-05-20225',
      phoneNumber: '123456789'
    }
  ];

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
                {accountsData.map((account) => (
                  <tr key={account.id}>
                    <td>{account.email}</td>
                    <td>{account.fullName}</td>
                    <td>{account.date}</td>
                    <td>{account.phoneNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AccountsPage;