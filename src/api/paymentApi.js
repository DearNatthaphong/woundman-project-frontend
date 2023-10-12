import axios from '../config/axios';

export const getCasesNoReceipt = () => axios.get('/payments/cases-no-receipt');

export const getCaseNoReceiptById = (caseId) =>
  axios.get(`/payments/cases-no-receipt/${caseId}`);

export const getPaymentItemsByTypeService = () =>
  axios.get(`/payments/payment-items?paymentTypeTitle=ค่าบริการ`);

export const getPaymentItemsByTypeSupply = () =>
  axios.get(`/payments/payment-items?paymentTypeTitle=ค่าเวชภัณฑ์`);
export const getPaymentItemsByTypeMedicine = () =>
  axios.get(`/payments/payment-items?paymentTypeTitle=ค่ายา`);

// export const createPaymentTypeService = (caseId, title, amount) =>
//   axios.post(
//     `/payments/cases-no-receipt/${caseId}/payment?paymentItemTitle=${title}`,
//     amount
//   );
export const createPayment = (caseId, title, amount) =>
  axios.post(
    `/payments/cases-no-receipt/${caseId}/payment`,
    { amount },
    {
      params: {
        paymentItemTitle: title
      }
    }
  );

export const getPaymentsServiceCaseId = (caseId) =>
  axios.get(
    `/payments/cases-no-receipt/${caseId}/payment?paymentTypeTitle=ค่าบริการ`
  );
export const getPaymentsSupplyCaseId = (caseId) =>
  axios.get(
    `/payments/cases-no-receipt/${caseId}/payment?paymentTypeTitle=ค่าเวชภัณฑ์`
  );
export const getPaymentsMedicineCaseId = (caseId) =>
  axios.get(
    `/payments/cases-no-receipt/${caseId}/payment?paymentTypeTitle=ค่ายา`
  );

export const deletePaymentByCaseIdPaymentId = (caseId, paymentId) =>
  axios.delete(`/payments/cases-no-receipt/${caseId}/payment/${paymentId}`);

export const updatePaymentByCaseIdPaymentId = (
  caseId,
  paymentId,
  title,
  amount
) =>
  axios.patch(
    `/payments/cases-no-receipt/${caseId}/payment/${paymentId}`,
    { amount },
    {
      params: {
        paymentItemTitle: title
      }
    }
  );
