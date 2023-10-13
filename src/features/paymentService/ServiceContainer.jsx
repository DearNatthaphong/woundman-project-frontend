import React from 'react';
import ServiceCreate from './ServiceCreate';
import ServicePaymentList from './ServicePaymentList';

function ServiceContainer({
  itemsService,
  createPaymentService,
  caseId,
  paymentsService,
  deletePaymentService,
  updatePaymentService
}) {
  return (
    <li className="list-group-item py-3">
      <h5 className="">1.ค่าบริการ</h5>
      <ServiceCreate
        itemsService={itemsService}
        createPaymentService={createPaymentService}
        caseId={caseId}
      />
      <ServicePaymentList
        paymentsService={paymentsService}
        deletePaymentService={deletePaymentService}
        caseId={caseId}
        itemsService={itemsService}
        updatePaymentService={updatePaymentService}
      />
    </li>
  );
}

export default ServiceContainer;
