import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend URL
  withCredentials: true, // Include cookies if necessary
});

export default axiosInstance;
