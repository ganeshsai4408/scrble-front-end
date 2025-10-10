import React from 'react';
import { FiGrid, FiPackage, FiUser } from 'react-icons/fi';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';
import './AdminSidebar.css';

const AdminSidebar = ({ activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: FiGrid, path: '/admin/dashboard' },
    { name: 'Orders', icon: FiPackage, path: '/admin/orders' },
    { name: 'Accounts', icon: FiUser, path: '/admin/accounts' },
  ];

  return (
    <aside className="admin-sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <img src={logoImage} alt="Scrble Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path || activeSection === item.name ? 'active' : ''}`}
                aria-current={location.pathname === item.path || activeSection === item.name ? 'page' : undefined}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  );
};

export default AdminSidebar;
