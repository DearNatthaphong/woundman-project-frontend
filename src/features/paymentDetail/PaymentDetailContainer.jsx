import React, { useEffect, useState } from 'react';
// import PaymentDetailHeader from './PaymentDetailHeader';
import PaymentDetailBody from './PaymentDetailBody';
import PaymentDetailFooter from './PaymentDetailFooter';
import { useParams } from 'react-router-dom';
import * as paymentService from '../../api/paymentApi';
import * as receiptService from '../../api/receiptApi';
import * as caseService from '../../api/caseApi';

function PaymentDetailContainer() {
  const { id: caseId } = useParams();
  const [caseData, setCaseData] = useState([]);
  const [itemsService, setItemsService] = useState([]);
  const [itemsSupply, setItemsSupply] = useState([]);
  const [itemsMedicine, setItemsMedicine] = useState([]);
  const [paymentsService, setPaymentsService] = useState([]);
  const [paymentsSupply, setPaymentsSupply] = useState([]);
  const [paymentsMedicine, setPaymentsMedicine] = useState([]);
  const [receipt, setReceipt] = useState([]);

  useEffect(() => {
    const fetchCase = async (caseId) => {
      try {
        // startLoading();
        const res = await caseService.getCaseById(caseId);
        // console.log('res.data', res.data);
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
        // console.log('res.data:', res.data);
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
    // const fetchPaymentsMedicine = async (caseId) => {
    //   try {
    //     // startLoading();
    //     const res = await paymentService.getPaymentsMedicineCaseId(caseId);
    //     // console.log('API Response for fetchPaymentsService:', res);
    //     setPaymentsMedicine(res.data.paymentsByType);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     // stopLoading();
    //   }
    // };

    const fetchReceipt = async () => {
      const res = await receiptService.getReceiptByCaseId(caseId);
      setReceipt(res.data.receipt);
    };

    fetchCase(caseId);
    fetchItemsService();
    fetchItemsSupply();
    fetchItemsMedicine();
    fetchPaymentsService(caseId);
    fetchPaymentsSupply(caseId);
    // fetchPaymentsMedicine(caseId);
    fetchReceipt();
  }, [caseId]);

  const createPaymentService = async (caseId, title, amount) => {
    const res = await paymentService.createPayment(caseId, title, amount);
    setPaymentsService([...paymentsService, res.data.newPayment]);
  };
  const createPaymentSupply = async (caseId, title, amount) => {
    const res = await paymentService.createPayment(caseId, title, amount);
    setPaymentsSupply([...paymentsSupply, res.data.newPayment]);
  };
  const createPaymentMedicine = async (caseId, title, amount) => {
    const res = await paymentService.createPayment(caseId, title, amount);
    setPaymentsMedicine([...paymentsMedicine, res.data.newPayment]);
  };

  const deletePaymentService = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    setTimeout(() => {
      const newPaymentsService = paymentsService.filter(
        (item) => item.id !== paymentId
      );
      setPaymentsService(newPaymentsService);
    }, 100);
  };
  const deletePaymentSupply = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    setTimeout(() => {
      const newPaymentsSupply = paymentsSupply.filter(
        (item) => item.id !== paymentId
      );
      setPaymentsSupply(newPaymentsSupply);
    }, 100);
  };
  const deletePaymentMedicine = async (caseId, paymentId) => {
    await paymentService.deletePaymentByCaseIdPaymentId(caseId, paymentId);
    setTimeout(() => {
      const newPaymentsMedicine = paymentsMedicine.filter(
        (item) => item.id !== paymentId
      );
      setPaymentsMedicine(newPaymentsMedicine);
    }, 100);
  };

  const updatePaymentService = async (caseId, paymentId, title, amount) => {
    const res = await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const newPaymentsService = paymentsService.map((item) =>
      item.id === paymentId ? res.data.updatedPayment : item
    );
    setPaymentsService(newPaymentsService);
  };
  const updatePaymentSupply = async (caseId, paymentId, title, amount) => {
    const res = await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const newPaymentsSupply = paymentsSupply.map((item) =>
      item.id === paymentId ? res.data.updatedPayment : item
    );
    setPaymentsSupply(newPaymentsSupply);
  };
  const updatePaymentMedicine = async (caseId, paymentId, title, amount) => {
    const res = await paymentService.updatePaymentByCaseIdPaymentId(
      caseId,
      paymentId,
      title,
      amount
    );
    const newPaymentsMedicine = paymentsMedicine.map((item) =>
      item.id === paymentId ? res.data.updatedPayment : item
    );
    setPaymentsMedicine(newPaymentsMedicine);
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
      (total, payment) => total + parseFloat(payment.price),
      0
    );
  }

  // Calculate the grand total
  const totalPrice = totalPriceService + totalPriceSupply + totalPriceMedicine;

  const formattedTotalPrice = totalPrice
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // console.log('totalPrice : ', totalPrice);
  // console.log('formattedTotalPrice : ', formattedTotalPrice);

  const createReceipt = async (caseId, totalPrice, method) => {
    await receiptService.createReceipt(caseId, totalPrice, method);
    const fetchReceipt = async (caseId) => {
      const res = await receiptService.getReceiptByCaseId(caseId);
      setReceipt(res.data.receipt);
    };
    fetchReceipt(caseId);
  };

  const deleteReceipt = async (caseId, receiptId) => {
    await receiptService.deleteReceiptByCaseIdReceiptId(caseId, receiptId);
    const fetchReceipt = async (caseId) => {
      const res = await receiptService.getReceiptByCaseId(caseId);
      setReceipt(res.data.receipt);
    };
    fetchReceipt(caseId);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-md-8">
          <h3>การทำจ่าย</h3>
          {/* <PaymentDetailHeader /> */}
          <div className="card mb-3">
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
              receipt={receipt}
              deleteReceipt={deleteReceipt}
              createReceipt={createReceipt}
              formattedTotalPrice={formattedTotalPrice}
              totalPrice={totalPrice}
            />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;
