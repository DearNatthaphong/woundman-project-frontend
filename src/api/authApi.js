import axios from '../config/axios';

export const patientRegister = (input) => axios.post('/auth/register', input);
export const patientLogin = ({ idCard, password }) =>
  axios.post('/auth/login', { idCard, password });

export const staffRegister = (input) =>
  axios.post('/auth/staff/register', input);
export const staffLogin = ({ emailOrMobile, password }) =>
  axios.post('/auth/staff/login', { emailOrMobile, password });
