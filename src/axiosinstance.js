import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://spark25.onrender.com/api',
  withCredentials: true, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error) 
);

axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response) {
      const { status } = error.response;
      
      if (status === 401) {
        console.error('Unauthorized: Token may be expired or invalid');
        localStorage.removeItem('token'); 
        window.location.href = '/login';
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
        