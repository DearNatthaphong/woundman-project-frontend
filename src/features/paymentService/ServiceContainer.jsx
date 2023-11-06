import React from 'react';
import ServiceCreate from './ServiceCreate';
import ServicePaymentList from './ServicePaymentList';
import PaymentForm from '../../components/ui/PaymentForm';

function ServiceContainer({
  itemsService,
  createPaymentService,
  caseId,
  paymentsService,
  deletePaymentService,
  updatePaymentService
}) {
  return (
    <li className="list-group-item px-1 py-3">
      <h5 className="">1.ค่าบริการ</h5>
      <PaymentForm
        items={itemsService}
        caseId={caseId}
        onSubmit={createPaymentService}
      />
      {/* <ServiceCreate
        items={itemsService}
        createPaymentService={createPaymentService}
        caseId={caseId}
      /> */}
      {/* <PaymentList  payments={paymentsService}
       caseId={caseId}
       itemsService={itemsService}
       isService={true}
       updatePaymentService={updatePaymentService}
      /> */}
      <ServicePaymentList
        paymentsService={paymentsService}
        caseId={caseId}
        itemsService={itemsService}
        updatePaymentService={updatePaymentService}
        deletePaymentService={deletePaymentService}
      />
    </li>
  );
}

export default ServiceContainer;
