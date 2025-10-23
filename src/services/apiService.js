import apiCall from '../utils/api';

// Auth API calls
export const authAPI = {
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: userData,
  }),

  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: credentials,
  }),

  verifyEmail: (token) => apiCall('/auth/verify-email', {
    method: 'POST',
    body: { token },
  }),

  forgotPassword: (email) => apiCall('/auth/forgot-password', {
    method: 'POST',
    body: { email },
  }),

  googleLogin: (googleData) => apiCall('/auth/google', {
    method: 'POST',
    body: googleData,
  }),

  verifyResetToken: (email, token) => apiCall('/auth/verify-reset-token', {
    method: 'POST',
    body: { email, token },
  }),

  resetPassword: (email, token, password) => apiCall('/auth/reset-password', {
    method: 'PUT',
    body: { email, token, password },
  }),
};

// Admin API calls
export const adminAPI = {
  getDashboardStats: () => apiCall('/admin/dashboard'),
  
  getUsers: () => apiCall('/admin/users'),
  
  getOrders: () => apiCall('/admin/orders'),
  
  updateOrderStatus: (orderId, status) => apiCall(`/admin/orders/${orderId}/status`, {
    method: 'PUT',
    body: { status },
  }),
};

// Orders API calls
export const ordersAPI = {
  getOrderHistory: () => apiCall('/orders'),
  
  createOrder: (orderData) => apiCall('/orders/checkout', {
    method: 'POST',
    body: orderData,
  }),
  
  verifyPayment: (paymentData) => apiCall('/orders/payment/verify', {
    method: 'POST',
    body: paymentData,
  }),
};

// Products API calls
export const productsAPI = {
  getProducts: (query = '') => apiCall(`/products${query}`),
  
  getProduct: (id) => apiCall(`/products/${id}`),
  
  createProduct: (productData) => apiCall('/products', {
    method: 'POST',
    body: productData,
  }),
  
  updateProduct: (id, productData) => apiCall(`/products/${id}`, {
    method: 'PUT',
    body: productData,
  }),
  
  deleteProduct: (id) => apiCall(`/products/${id}`, {
    method: 'DELETE',
  }),
};