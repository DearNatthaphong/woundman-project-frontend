import axios from '../config/axios';

export const getAppointments = () => axios.get('/appointments/patients');

export const getAppointmentsBySearchTerm = (searchTerm) =>
  axios.get(`/appointments/patients/search?searchTerm=${searchTerm}`);

export const getAppointmentsByFilter = (status) =>
  axios.get(`/appointments/patients/filter?status=${status}`);

export const updateAppointmentById = (id) => axios.patch('/appointments/:id');
