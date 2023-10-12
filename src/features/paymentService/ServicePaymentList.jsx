import React from 'react';
import ServicePayment from './ServicePayment';

function ServicePaymentList({
  paymentsService,
  deletePaymentService,
  caseId,
  itemsService,
  updatePayment
}) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">รายการ</th>
          <th scope="col">จำนวน</th>
          <th scope="col">{`ราคา(บาท)`}</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {paymentsService.map((item, index) => (
          <ServicePayment
            key={item.id}
            paymentService={item}
            index={index}
            deletePaymentService={deletePaymentService}
            caseId={caseId}
            itemsService={itemsService}
            updatePayment={updatePayment}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ServicePaymentList;
