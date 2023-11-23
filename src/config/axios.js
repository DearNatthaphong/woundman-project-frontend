// axios.get('http://localhost');
// axios.post('/auth/register');

import axios from 'axios';
import { API_ENDPOINT_URL } from './env';
import { getAccessToken, removeAccessToken } from '../utils/localStorage';

// axios.defaults.baseURL = 'http://localhost:8008'
axios.defaults.baseURL = API_ENDPOINT_URL;

// global function
axios.interceptors.request.use(
  // config object : { headers: { Authorization: `Bearer ` + getAccessToken() }
  (config) => {
    // if (config.url === 'auth/login') return config //in case no need to config
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; //important if no config it will return undefined
  },
  (err) => {
    return Promise.reject(err); //will show err in catch function
  }
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
    if (err.response.status === 401) {
      removeAccessToken();
      if (err.url === '/patient') {
        // if (err.config.url.startsWith('/staff')) {
        return window.location.replace('/staff'); //ใช้ useNavigate ไม่ได้ ไม่ใช่ component เลยใช้ js redirect, assign กด back ได้ replace กด bcak ไม่ได้
      }
      if (err.url === '/staff') {
        // if (err.config.url.startsWith('/patient')) {
        // else {
        return window.location.replace('/patient');
      }
    }
    // return err;
    return Promise.reject(err);
  }
);

export default axios;
