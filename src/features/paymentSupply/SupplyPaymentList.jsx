import React from 'react';
import SupplyPayment from './SupplyPayment';
import PaymentItem from '../../components/ui/PaymentItem';

function SupplyPaymentList({
  paymentsSupply,
  deletePaymentSupply,
  caseId,
  updatePaymentSupply,
  itemsSupply
}) {
  return (
    paymentsSupply.length > 0 && (
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
                {paymentsSupply.map((item, index) => (
                  <PaymentItem
                    key={item.id}
                    index={index}
                    caseId={caseId}
                    itemsType={itemsSupply} // itemsType
                    payment={item} // payment
                    deletePayment={deletePaymentSupply} // deletePayment
                    updatePayment={updatePaymentSupply} // updatePayment
                  />
                  // <SupplyPayment
                  //   key={item.id}
                  //   index={index}
                  //   caseId={caseId}
                  //   itemsSupply={itemsSupply}
                  //   paymentSupply={item}
                  //   deletePaymentSupply={deletePaymentSupply}
                  //   updatePaymentSupply={updatePaymentSupply}
                  // />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  );
}

export default SupplyPaymentList;
