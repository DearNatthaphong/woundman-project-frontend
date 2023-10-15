import React, { useEffect, useState } from 'react';
import CaseWithReceiptList from './CaseWithReceiptList';
import * as receiptService from '../../api/receiptApi';

function ReceiptContainer() {
  const [casesData, setCasesData] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        const res = await receiptService.getCasesWithReceipt();
        // console.log('res.data : ', res.data);
        setCasesData(res.data.casesData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCases();
  }, []);
  return <CaseWithReceiptList casesData={casesData} />;
}

export default ReceiptContainer;
