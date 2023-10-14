import axios from '../config/axios';

export const createReceipt = (caseId, totalPrice, method) =>
  axios.post(`/receipts/cases/${caseId}`, { totalPrice, method });

export const getReceiptByCaseId = (caseId) =>
  axios.get(`/receipts/cases/${caseId}`);

export const deleteReceiptByCaseIdReceiptId = (caseId, receiptId) =>
  axios.delete(`receipts/cases/${caseId}/receipts/${receiptId}`);
