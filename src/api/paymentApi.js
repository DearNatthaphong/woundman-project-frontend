import axios from '../config/axios';

export const getCasesNoReceipt = () => axios.get('/payments/cases-no-receipt');

export const getCaseNoReceiptById = (caseId) =>
  axios.get(`/payments/cases-no-receipt/${caseId}`);

export const getPaymentItemsByTypeService = () =>
  axios.get(`/payments/payment-items?paymentTypeTitle=ค่าบริการ`);

// export const createPaymentTypeService = (caseId, title, amount) =>
//   axios.post(
//     `/payments/cases-no-receipt/${caseId}/payment?paymentItemTitle=${title}`,
//     amount
//   );
export const createPaymentTypeService = (caseId, title, amount) =>
  axios.post(
    `/payments/cases-no-receipt/${caseId}/payment`,
    { amount },
    {
      params: {
        paymentItemTitle: title
      }
    }
  );

export const getPaymentsByTypeServiceByCaseId = (caseId) =>
  axios.get(
    `/payments/cases-no-receipt/${caseId}/payment?paymentTypeTitle=ค่าบริการ`
  );
