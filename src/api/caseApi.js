import axios from 'axios';

export const getCases = async () => axios.get('/cases');

export const getCaseById = async (caseId) => axios.get(`/cases/${caseId}`);

export const getCasesBySearchTerm = async (searchTerm) =>
  axios.get(`/cases/search?searchTerm=${searchTerm}`);

export const updateCaseByCaseId = async (caseId, updatedData) =>
  axios.patch(`/cases/${caseId}`, updatedData);
