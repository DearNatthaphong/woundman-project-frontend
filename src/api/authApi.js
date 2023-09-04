import axios from '../config/axios';
// import { getAccessToken } from '../utils/localStorage';

export const patientRegister = (input) => axios.post('/auth/register', input);
export const patientLogin = ({ idCard, password }) =>
  axios.post('/auth/login', { idCard, password });
export const getMe = () => axios.get('/auth/me');
// axios.get('/auth/me');
// axios.get('/auth/me', {
//   headers: { Authorization: `Bearer ` + getAccessToken() }
// });

export const staffRegister = (input) =>
  axios.post('/auth/staff/register', input);
export const staffLogin = ({ emailOrMobile, password }) =>
  axios.post('/auth/staff/login', { emailOrMobile, password });
export const getStaffMe = () => axios.get('/auth/staff/me');
// export const getStaffMe = () =>
//   axios.get('/auth/staff/me', {
//     headers: { Authorization: `Bearer ` + getAccessToken() }
//   });
