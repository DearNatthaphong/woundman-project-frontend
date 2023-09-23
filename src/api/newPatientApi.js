import axios from 'axios';

export const updatePatient = (id, input) =>
  axios.patch(`/patients/${id}`, input);

export const getPatients = async () => axios.get('/patients');

export const getPatientById = async (id) => axios.get(`/patients/${id}`);

export const getPatientsBySearchTerm = async (searchTerm) =>
  axios.get(`/patients/search?searchTerm=${searchTerm}`);

export const createCaseByPatientId = async (id, input) =>
  axios.post(`/patients/${id}/case`, input);

export const getCasesByPatientId = async (id) =>
  axios.get(`/patients/${id}/cases`);
