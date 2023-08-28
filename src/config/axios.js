// axios.get('http://localhost');
// axios.post('/auth/register');

import axios from 'axios';
import { API_ENDPOINT_URL } from './env';

// axios.defaults.baseURL = 'http://localhost:8008'
axios.defaults.baseURL = API_ENDPOINT_URL;

export default axios;
