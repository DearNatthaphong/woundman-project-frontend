import React, { useEffect, useState } from 'react';
import PaymentDetailHeader from './PaymentDetailHeader';
import PaymentDetailBody from './PaymentDetailBody';
import PaymentDetailFooter from './PaymentDetailFooter';
import { useParams } from 'react-router-dom';
import * as paymentService from '../../api/paymentApi';

function PaymentDetailContainer() {
  const { id: caseId } = useParams();
  const [caseData, setCaseData] = useState({});
  const [itemsService, setItemsService] = useState([]);

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
        // console.log('res.data : ', res.data);
        setItemsService(res.data.paymentItemsService);
        // console.log('ItemsService : ', ItemsService);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCaseBycaseId(caseId);
    fetchItemsService();
  }, [caseId]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <div className="card border-dark mb-3">
            <PaymentDetailHeader />
            <PaymentDetailBody
              caseData={caseData}
              itemsService={itemsService}
            />
            <PaymentDetailFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailContainer;
