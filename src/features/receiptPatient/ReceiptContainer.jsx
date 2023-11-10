import React, { useEffect, useState } from 'react';
import ReceiptList from './ReceiptList';
import * as receiptService from '../../api/receiptApi';

function ReceiptContainer() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        // startLoading();
        const res = await receiptService.getReceiptsByPatientId();
        // console.log('res.data : ', res.data);
        setReceipts(res.data.receipts);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchReceipts();
  }, []);
  return <ReceiptList receipts={receipts} />;
}

export default ReceiptContainer;
