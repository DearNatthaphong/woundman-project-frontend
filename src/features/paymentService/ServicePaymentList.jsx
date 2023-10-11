import React from 'react';
import ServicePayment from './ServicePayment';

function ServicePaymentList({
  paymentsByTypeService,
  deletePayment,
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
      {paymentsByTypeService.map((item, index) => (
        <ServicePayment
          key={item.id}
          paymentByTypeService={item}
          index={index}
          deletePayment={deletePayment}
          caseId={caseId}
          itemsService={itemsService}
          updatePayment={updatePayment}
        />
      ))}
    </table>
  );
}

export default ServicePaymentList;
