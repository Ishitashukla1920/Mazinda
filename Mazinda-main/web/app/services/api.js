/*import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL
  withCredentials: true, // Include cookies if necessary
});

export default axiosInstance;*/
import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend API URL
  withCredentials: true, // Include credentials (cookies) in requests
});

// Example request with error handling
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    // Log errors to help debugging
    if (error.response) {
      console.error('Error Response:', error.response.data);
    } else if (error.request) {
      console.error('Error Request:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error); // Forward the error
  }
);

export default axiosInstance;

