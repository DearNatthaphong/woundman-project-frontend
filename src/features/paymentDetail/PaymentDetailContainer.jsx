import React, { useEffect, useState } from 'react';
import PaymentDetailHeader from './PaymentDetailHeader';
import PaymentDetailBody from './PaymentDetailBody';
import PaymentDetailFooter from './PaymentDetailFooter';
import { useParams } from 'react-router-dom';
import * as paymentService from '../../api/paymentApi';

function PaymentDetailContainer() {
  const { id: caseId } = useParams();
  const [caseData, setCaseData] = useState({});
  const [itemsService, setItemsService] = useState([]);
  const [paymentsByTypeService, setPaymentsByTypeService] = useState([]);

  useEffect(() => {
    const fetchCaseBycaseId = async (caseId) => {
      try {
        // startLoading();
        const res = await paymentService.getCaseNoReceiptById(caseId);
        setCaseData(res.data.caseData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchItemsService = async () => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentItemsByTypeService();
        setItemsService(res.data.paymentItemsService);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchPaymentsByTypeService = async (caseId) => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentsByTypeServiceByCaseId(
          caseId
        );
        setPaymentsByTypeService(res.data.paymentsByTypeService);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCaseBycaseId(caseId);
    fetchItemsService();
    fetchPaymentsByTypeService(caseId);
  }, [caseId]);

  const createPaymentService = async (caseId, title, amount) => {
    await paymentService.createPaymentTypeService(caseId, title, amount);
    const fetchPaymentsByTypeService = async (caseId) => {
      const res = await paymentService.getPaymentsByTypeServiceByCaseId(caseId);
      setPaymentsByTypeService(res.data.paymentsByTypeService);
    };
    fetchPaymentsByTypeService(caseId);
  };

  const deletePayment = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    const fetchPaymentsByTypeService = async (caseId) => {
      const res = await paymentService.getPaymentsByTypeServiceByCaseId(caseId);
      setPaymentsByTypeService(res.data.paymentsByTypeService);
    };
    fetchPaymentsByTypeService(caseId);
  };

  const updatePayment = async (caseId, paymentId, title, amount) => {
    await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const fetchPaymentsByTypeService = async (caseId) => {
      const res = await paymentService.getPaymentsByTypeServiceByCaseId(caseId);
      setPaymentsByTypeService(res.data.paymentsByTypeService);
    };
    fetchPaymentsByTypeService(caseId);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <div className="card border-dark mb-3">
            <PaymentDetailHeader />
            <PaymentDetailBody
              caseData={caseData}
              itemsService={itemsService}
              caseId={caseId}
              createPaymentService={createPaymentService}
              paymentsByTypeService={paymentsByTypeService}
              deletePayment={deletePayment}
              updatePayment={updatePayment}
            />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;