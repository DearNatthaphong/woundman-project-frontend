import axios from '../config/axios';

export const getCasesNoReceipt = () => axios.get('/payments/cases-no-receipt');

export const getCaseNoReceiptById = (caseId) =>
  axios.get(`/payments/cases-no-receipt/${caseId}`);

export const getPaymentItemsByTypeService = () =>
  axios.get(`/payments/payment-items?paymentTypeTitle=ค่าบริการ`);
