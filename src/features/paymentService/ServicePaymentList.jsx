import React from 'react';
import ServicePayment from './ServicePayment';
import PaymentItem from '../../components/ui/PaymentItem';

function ServicePaymentList({
  paymentsService,
  deletePaymentService,
  caseId,
  itemsService,
  updatePaymentService
}) {
  return (
    <div className="card mt-2">
      <div className="card-body px-0 py-1">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">รายการ</th>
                <th className="text-center" scope="col">
                  จำนวน
                </th>
                <th scope="col">{`ราคา(บาท)`}</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paymentsService?.map((item, index) => (
                <PaymentItem
                  key={item.id}
                  index={index}
                  caseId={caseId}
                  itemsType={itemsService} // itemsType
                  payment={item} // payment
                  deletePayment={deletePaymentService} // deletePayment
                  updatePayment={updatePaymentService} // updatePayment
                />
                // <ServicePayment
                //   key={item.id}
                //   index={index}
                //   caseId={caseId}
                //   itemsService={itemsService} // itemsType
                //   paymentService={item} // payment
                //   deletePaymentService={deletePaymentService} // deletePayment
                //   updatePaymentService={updatePaymentService} // updatePayment
                // />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServicePaymentList;
