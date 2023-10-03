// import axios from 'axios';
import axios from '../config/axios';

export const getPatients = () => axios.get('/patients');

export const getPatientsBySearchTerm = (searchTerm) =>
  axios.get(`/patients/search?searchTerm=${searchTerm}`);

export const getPatientById = (patientId) =>
  axios.get(`/patients/${patientId}`);

export const updatePatient = (patientId, input) =>
  axios.patch(`/patients/${patientId}`, input);

export const createCaseByPatientId = (patientId, input) =>
  axios.post(`/patients/${patientId}/case`, input);

export const getCasesByPatientId = (patientId) =>
  axios.get(`/patients/${patientId}/cases`);

export const updateCaseByPatientId = (patientId, caseId, updatedData) =>
  axios.patch(`/patients/${patientId}/cases/${caseId}`, updatedData);

export const deleteCaseByPatientId = (patientId, caseId) =>
  axios.delete(`/patients/${patientId}/cases/${caseId}`);
