import React from 'react';
import MedicinePayment from './MedicinePayment';
import PaymentItem from '../../components/ui/PaymentItem';

function MedicinePaymentList({
  paymentsMedicine,
  deletePaymentMedicine,
  caseId,
  updatePaymentMedicine,
  itemsMedicine
}) {
  return (
    <div className="card mt-2">
      <div className="card-body px-0 py-1">
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
            {paymentsMedicine.map((item, index) => (
              <PaymentItem
                key={item.id}
                index={index}
                caseId={caseId}
                itemsType={itemsMedicine} // itemsType
                payment={item} // payment
                deletePayment={deletePaymentMedicine} // deletePayment
                updatePayment={updatePaymentMedicine} // updatePayment
              />
              // <MedicinePayment
              //   key={item.id}
              //   index={index}
              //   paymentMedicine={item}
              //   deletePaymentMedicine={deletePaymentMedicine}
              //   caseId={caseId}
              //   updatePaymentMedicine={updatePaymentMedicine}
              //   itemsMedicine={itemsMedicine}
              // />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MedicinePaymentList;
