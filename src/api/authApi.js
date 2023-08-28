import axios from '../config/axios';

export const patientRegister = (input) => axios.post('/auth/register', input);

export const staffRegister = (input) =>
  axios.post('/auth/staff/register', input);
