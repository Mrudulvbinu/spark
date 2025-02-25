import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, 
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request error
);

// Response interceptor for token expiration or unauthorized access
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful response
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Token may be expired or invalid');
      localStorage.removeItem('token'); // Clear expired token
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error); // Handle other errors
  }
);

export default axiosInstance;
