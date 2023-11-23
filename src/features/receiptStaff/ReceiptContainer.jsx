import React, { useEffect, useState } from 'react';
import CaseWithReceiptList from './CaseWithReceiptList';
import * as receiptService from '../../api/receiptApi';
import Spinner from '../../components/ui/Spinner';
import { useAuth } from '../../contexts/AuthContext';

function ReceiptContainer() {
  const [casesData, setCasesData] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const { staff } = useAuth();

  useEffect(() => {
    const fetchCases = async () => {
      try {
        if (staff) {
          const res = await receiptService.getCasesWithReceipt();
          setCasesData(res.data.casesData);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchCases();
  }, [staff]);

  if (initialLoading) return <Spinner />;

  return (
    <>
      {staff && (
        <div className="container-fluid mt-2">
          {casesData.length ? (
            <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
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
        </div>
      )}
    </>
  );
}

export default ReceiptContainer;
