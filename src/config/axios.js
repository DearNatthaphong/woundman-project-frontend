// axios.get('http://localhost');
// axios.post('/auth/register');

import axios from 'axios';
import { API_ENDPOINT_URL } from './env';
import { getAccessToken, removeAccessToken } from '../utils/localStorage';

// axios.defaults.baseURL = 'http://localhost:8008'
axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    // if (config.url === '/' || config.url === '/staff') {
    //   return config;
    // }
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; //important
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
    if (err.response.status === 401) {
      removeAccessToken();
      if (err.url === '/') {
        window.location.replace('/');
      }
      if (err.url === '/staff') {
        window.location.replace('/staff');
      }
    }
    // return err;
    return Promise.reject(err);
  }
);

export default axios;
