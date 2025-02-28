import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, 
});

// Request Interceptor: Attach Token to Headers
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

// Response Interceptor: Handle Unauthorized Access & Errors
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful response
  (error) => {
    if (error.response) {
      const { status } = error.response;
      
      if (status === 401) {
        console.error('Unauthorized: Token may be expired or invalid');
        localStorage.removeItem('token'); // Clear token
        window.location.href = '/login'; // Redirect to login page
      } else if (status === 403) {
        console.error('Forbidden: You do not have permission to access this resource');
        alert('Access Denied! You do not have permission.');
      } else if (status >= 500) {
        console.error('Server error:', error.response.data);
        alert('A server error occurred. Please try again later.');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
        