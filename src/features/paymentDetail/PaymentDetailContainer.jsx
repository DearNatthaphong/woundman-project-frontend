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
  const [itemsSupply, setItemsSupply] = useState([]);
  const [itemsMedicine, setItemsMedicine] = useState([]);
  const [paymentsService, setPaymentsService] = useState([]);
  const [paymentsSupply, setPaymentsSupply] = useState([]);
  const [paymentsMedicine, setPaymentsMedicine] = useState([]);

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
        setItemsService(res.data.paymentItems);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchItemsSupply = async () => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentItemsByTypeSupply();
        setItemsSupply(res.data.paymentItems);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchItemsMedicine = async () => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentItemsByTypeMedicine();

        setItemsMedicine(res.data.paymentItems);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    const fetchPaymentsService = async (caseId) => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentsServiceCaseId(caseId);
        // console.log('API Response for fetchPaymentsService:', res);
        setPaymentsService(res.data.paymentsByType);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchPaymentsSupply = async (caseId) => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentsSupplyCaseId(caseId);
        // console.log('API Response for fetchPaymentsSupply:', res);
        setPaymentsSupply(res.data.paymentsByType);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };
    const fetchPaymentsMedicine = async (caseId) => {
      try {
        // startLoading();
        const res = await paymentService.getPaymentsMedicineCaseId(caseId);
        // console.log('API Response for fetchPaymentsService:', res);
        setPaymentsMedicine(res.data.paymentsByType);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCaseBycaseId(caseId);
    fetchItemsService();
    fetchItemsSupply();
    fetchItemsMedicine();
    fetchPaymentsService(caseId);
    fetchPaymentsSupply(caseId);
    fetchPaymentsMedicine(caseId);
  }, [caseId]);

  // console.log('itemsSupply :', itemsSupply);
  // console.log('itemsMedicine :', itemsMedicine);

  const createPaymentService = async (caseId, title, amount) => {
    await paymentService.createPayment(caseId, title, amount);
    const fetchPaymentsService = async (caseId) => {
      const res = await paymentService.getPaymentsServiceCaseId(caseId);
      setPaymentsService(res.data.paymentsByType);
    };
    fetchPaymentsService(caseId);
  };
  const createPaymentSupply = async (caseId, title, amount) => {
    await paymentService.createPayment(caseId, title, amount);
    const fetchPaymentsSupply = async (caseId) => {
      const res = await paymentService.getPaymentsSupplyCaseId(caseId);
      setPaymentsSupply(res.data.paymentsByType);
    };
    fetchPaymentsSupply(caseId);
  };
  const createPaymentMedicine = async (caseId, title, amount) => {
    await paymentService.createPayment(caseId, title, amount);
    const fetchPaymentsMedicine = async (caseId) => {
      const res = await paymentService.getPaymentsMedicineCaseId(caseId);
      setPaymentsMedicine(res.data.paymentsByType);
    };
    fetchPaymentsMedicine(caseId);
  };

  const deletePaymentService = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    const fetchPaymentsService = async (caseId) => {
      const res = await paymentService.getPaymentsServiceCaseId(caseId);
      setPaymentsService(res.data.paymentsByType);
    };
    fetchPaymentsService(caseId);
  };
  const deletePaymentSupply = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    const fetchPaymentsSupply = async (caseId) => {
      const res = await paymentService.getPaymentsSupplyCaseId(caseId);
      setPaymentsSupply(res.data.paymentsByType);
    };
    fetchPaymentsSupply(caseId);
  };
  const deletePaymentMedicine = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    const fetchPaymentsMedicine = async (caseId) => {
      const res = await paymentService.getPaymentsMedicineCaseId(caseId);
      setPaymentsMedicine(res.data.paymentsByType);
    };
    fetchPaymentsMedicine(caseId);
  };

  const updatePaymentService = async (caseId, paymentId, title, amount) => {
    await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const fetchPaymentsService = async (caseId) => {
      const res = await paymentService.getPaymentsServiceCaseId(caseId);
      setPaymentsService(res.data.paymentsByType);
    };
    fetchPaymentsService(caseId);
  };
  const updatePaymentSupply = async (caseId, paymentId, title, amount) => {
    await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const fetchPaymentsSupply = async (caseId) => {
      const res = await paymentService.getPaymentsSupplyCaseId(caseId);
      setPaymentsSupply(res.data.paymentsByType);
    };
    fetchPaymentsSupply(caseId);
  };
  const updatePaymentMedicine = async (caseId, paymentId, title, amount) => {
    await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const fetchPaymentsMedicine = async (caseId) => {
      const res = await paymentService.getPaymentsMedicineCaseId(caseId);
      setPaymentsMedicine(res.data.paymentsByType);
    };
    fetchPaymentsMedicine(caseId);
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
              itemsSupply={itemsSupply}
              itemsMedicine={itemsMedicine}
              caseId={caseId}
              createPaymentService={createPaymentService}
              paymentsService={paymentsService}
              createPaymentSupply={createPaymentSupply}
              paymentsSupply={paymentsSupply}
              createPaymentMedicine={createPaymentMedicine}
              paymentsMedicine={paymentsMedicine}
              deletePaymentService={deletePaymentService}
              deletePaymentSupply={deletePaymentSupply}
              deletePaymentMedicine={deletePaymentMedicine}
              updatePaymentService={updatePaymentService}
              updatePaymentSupply={updatePaymentSupply}
              updatePaymentMedicine={updatePaymentMedicine}
            />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;
