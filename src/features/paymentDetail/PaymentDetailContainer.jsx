import React, { useEffect, useState } from 'react';
import PaymentDetailHeader from './PaymentDetailHeader';
import PaymentDetailBody from './PaymentDetailBody';
import PaymentDetailFooter from './PaymentDetailFooter';
import { useParams } from 'react-router-dom';
import * as paymentService from '../../api/paymentApi';

function PaymentDetailContainer() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    const fetchCaseById = async (id) => {
      try {
        // startLoading();
        const res = await paymentService.getCaseById(id);
        console.log('res.data : ', res.data);
        // console.log('caseId : ', caseId);
        setCaseData(res.data.caseData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCaseById(id);
  }, [id]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <div className="card border-dark mb-3">
            <PaymentDetailHeader />
            <PaymentDetailBody caseData={caseData} />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;
