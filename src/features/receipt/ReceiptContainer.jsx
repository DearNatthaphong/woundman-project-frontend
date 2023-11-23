import React, { useEffect, useState } from 'react';
import CaseWithReceiptList from './CaseWithReceiptList';
import * as receiptService from '../../api/receiptApi';
import Spinner from '../../components/ui/Spinner';
import { useAuth } from '../../contexts/AuthContext';
import ReceiptList from './ReceiptList';

function ReceiptContainer() {
  const [casesData, setCasesData] = useState([]);
  const [receipts, setReceipts] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const { staff, patient } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (staff) {
          const caseRes = await receiptService.getCasesWithReceipt();
          setCasesData(caseRes.data.casesData);
        }
        if (patient) {
          const receiptRes = await receiptService.getReceiptsByPatientId();
          setReceipts(receiptRes.data.receipts);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchData();
  }, [staff, patient]);

  if (initialLoading) return <Spinner />;

  return (
    <div className="container-fluid mt-2">
      {staff && (
        <>
          {casesData.length ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
              <CaseWithReceiptList casesData={casesData} />
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
        </>
      )}
      {patient && (
        <>
          {receipts.length ? (
            <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
              <ReceiptList receipts={receipts} />
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
        </>
      )}
    </div>
  );
}

export default ReceiptContainer;
