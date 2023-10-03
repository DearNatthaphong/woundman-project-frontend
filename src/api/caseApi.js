// import axios from 'axios';
import axios from '../config/axios';

export const getCases = () => axios.get('/cases');

export const getCasesWithoutTreatment = () =>
  axios.get('/cases/without-treatment');

export const getCasesBySearchTerm = (searchTerm) =>
  axios.get(`/cases/search?searchTerm=${searchTerm}`);

export const getCaseById = (caseId) => axios.get(`/cases/${caseId}`);

export const updateCaseByCaseId = (caseId, updatedData) =>
  axios.patch(`/cases/${caseId}`, updatedData);

export const creatTreatmentByCaseId = (caseId, input) =>
  axios.post(`/cases/${caseId}/treatments`, input);

export const getTreatmentsByCaseId = (caseId) =>
  axios.get(`/cases/${caseId}/treatments`);

export const updateTreatmentByCaseId = (caseId, treatmentId, input) =>
  axios.patch(`/cases/${caseId}/treatments/${treatmentId}`, input);

export const deleteTreatmentByCaseId = (caseId, treatmentId) =>
  axios.delete(`/cases/${caseId}/treatments/${treatmentId}`);
