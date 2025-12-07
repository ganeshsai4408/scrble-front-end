const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api`;

// Log API base URL on app startup
console.log('🔗 API Base URL configured:', API_BASE_URL);
console.log('📍 Environment:', import.meta.env.MODE);

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
  }

  const fullURL = `${API_BASE_URL}${endpoint}`;
  console.log(`📤 API Request: ${config.method} ${fullURL}`);

  try {
    const response = await fetch(fullURL, config);
    const data = await response.json();

    if (!response.ok) {
      console.error(`❌ API Error (${response.status}):`, data.message || `HTTP error! status: ${response.status}`);
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    console.log(`✅ API Success (${response.status}): ${endpoint}`);
    return data;
  } catch (error) {
    console.error(`❌ API call error for ${endpoint}:`, error.message);
    console.error('🔍 Full error details:', error);
    throw error;
  }
};

export default apiCall;