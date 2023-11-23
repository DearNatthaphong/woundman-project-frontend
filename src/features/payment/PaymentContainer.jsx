import React, { useEffect, useState } from 'react';
import CaseNoReceiptList from './CaseNoReceiptList';
import * as paymentService from '../../api/paymentApi';
import Spinner from '../../components/ui/Spinner';

function PaymentContainer() {
  const [casesData, setCasesData] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        const res = await paymentService.getCasesNoReceipt();
        // console.log('res.data : ', res.data);
        setCasesData(res.data.casesData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
        setInitialLoading(false);
      }
    };

    fetchCases();
  }, []);

  if (initialLoading) return <Spinner />;

  return (
    <div className="container-fluid mt-2">
      {casesData.length ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          <CaseNoReceiptList casesData={casesData} />
        </div>
      ) : (
        <div className="card mt-3">
          <div className="card-body">
            <p className="m-0">
              <i className="fa-regular fa-rectangle-xmark pe-3" />
              ไม่มีข้อมูล
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentContainer;
