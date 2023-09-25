import axios from 'axios';

export const getPatients = async () => axios.get('/patients');

export const getPatientsBySearchTerm = async (searchTerm) =>
  axios.get(`/patients/search?searchTerm=${searchTerm}`);

export const getPatientById = async (patientId) =>
  axios.get(`/patients/${patientId}`);

export const updatePatient = (patientId, input) =>
  axios.patch(`/patients/${patientId}`, input);

export const createCaseByPatientId = async (patientId, input) =>
  axios.post(`/patients/${patientId}/case`, input);

export const getCasesByPatientId = async (patientId) =>
  axios.get(`/patients/${patientId}/cases`);

export const updateCaseByPatientId = async (patientId, caseId, updatedData) =>
  axios.patch(`/patients/${patientId}/cases/${caseId}`, updatedData);
