import axios from '../config/axios';

export const createReceipt = (caseId, totalPrice, method) =>
  axios.post(`/receipts/cases/${caseId}`, { totalPrice, method });

export const getReceiptByCaseId = (caseId) =>
  axios.get(`/receipts/cases/${caseId}`);

export const deleteReceiptByCaseIdReceiptId = (caseId, receiptId) =>
  axios.delete(`/receipts/cases/${caseId}/receipts/${receiptId}`);

export const getCasesWithReceipt = () =>
  axios.get('/receipts/cases-with-receipt');

export const getReceiptsByPatientId = () => axios.get('/receipts/patient');
