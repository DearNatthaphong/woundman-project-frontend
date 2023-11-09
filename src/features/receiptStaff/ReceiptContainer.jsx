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
  return (
    <div className="container-fluid mt-2">
      <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
        <CaseWithReceiptList casesData={casesData} />;
      </div>
    </div>
  );
}

export default ReceiptContainer;
