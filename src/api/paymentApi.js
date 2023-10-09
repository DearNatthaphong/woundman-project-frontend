import axios from '../config/axios';

export const getCasesNoReceipt = () => axios.get('/payments/cases-no-receipt');

export const getCaseById = (id) =>
  axios.get(`/payments/cases-no-receipt/${id}`);
