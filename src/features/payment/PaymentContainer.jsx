import React, { useEffect, useState } from 'react';
import CaseNoReceiptList from './CaseNoReceiptList';
import * as paymentService from '../../api/paymentApi';

function PaymentContainer() {
  const [casesData, setCasesData] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        const res = await paymentService.getCasesNoReceipt();
        console.log('res.data : ', res.data);
        setCasesData(res.data.casesData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCases();
  }, []);

  return <CaseNoReceiptList casesData={casesData} />;
}

export default PaymentContainer;
