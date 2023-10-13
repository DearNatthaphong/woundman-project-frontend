import React, { useEffect, useState } from 'react';
import PaymentDetailHeader from './PaymentDetailHeader';
import PaymentDetailBody from './PaymentDetailBody';
import PaymentDetailFooter from './PaymentDetailFooter';
import { useParams } from 'react-router-dom';
import * as paymentService from '../../api/paymentApi';
import * as receiptService from '../../api/receiptApi';

function PaymentDetailContainer() {
  const { id: caseId } = useParams();
  const [caseData, setCaseData] = useState({});
  const [itemsService, setItemsService] = useState([]);
  const [itemsSupply, setItemsSupply] = useState([]);
  const [itemsMedicine, setItemsMedicine] = useState([]);
  const [paymentsService, setPaymentsService] = useState([]);
  const [paymentsSupply, setPaymentsSupply] = useState([]);
  const [paymentsMedicine, setPaymentsMedicine] = useState([]);
  const [receipt, setReceipt] = useState({});

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

    const fetchReceipt = async (caseId) => {
      const res = await receiptService.getReceiptByCaseId(caseId);
      console.log('receipt :', receipt);
      setReceipt(res.data.receipt);
    };
    fetchReceipt(caseId);

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

  // Initialize totalPriceService, totalPriceSupply, and totalPriceMedicine to 0
  let totalPriceService = 0;
  let totalPriceSupply = 0;
  let totalPriceMedicine = 0;

  if (paymentsService.length > 0) {
    totalPriceService = paymentsService.reduce(
      (total, payment) => total + parseFloat(payment.price),
      0
    );
  }

  if (paymentsSupply.length > 0) {
    totalPriceSupply = paymentsSupply.reduce(
      (total, payment) => total + parseFloat(payment.price),
      0
    );
  }

  if (paymentsMedicine.length > 0) {
    totalPriceMedicine = paymentsMedicine.reduce(
      (total, payment) =>
        total +
        parseFloat(
          payment.price
          // parseFloat(payment.price)
          //   .toFixed(2)
          //   .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        ),
      0
    );
  }

  // Calculate the grand total
  const totalPrice = totalPriceService + totalPriceSupply + totalPriceMedicine;

  const formattedTotalPrice = totalPrice
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  console.log('totalPrice : ', formattedTotalPrice);

  const createReceipt = async (caseId, totalPrice, method) => {
    await receiptService.createReceipt(caseId, totalPrice, method);
    const fetchReceipt = async (caseId) => {
      const res = await receiptService.getReceiptByCaseId(caseId);
      setReceipt(res.data.receipt);
    };
    fetchReceipt(caseId);
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
              formattedTotalPrice={formattedTotalPrice}
              receipt={receipt}
            />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;
