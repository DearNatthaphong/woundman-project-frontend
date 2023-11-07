import React from 'react';
import SupplyCreate from './SupplyCreate';
import SupplyPaymentList from './SupplyPaymentList';
import PaymentForm from '../../components/ui/PaymentForm';

function SupplyContainer({
  itemsSupply,
  createPaymentSupply,
  paymentsSupply,
  caseId,
  deletePaymentSupply,
  updatePaymentSupply
}) {
  return (
    <div className="mt-3">
      {/* <li className="list-group-item py-3"> */}
      <h5 className="">2.ค่าเวชภัณฑ์</h5>
      <PaymentForm
        items={itemsSupply}
        caseId={caseId}
        onSubmit={createPaymentSupply}
      />
      {/* <SupplyCreate
        itemsSupply={itemsSupply}
        createPaymentSupply={createPaymentSupply}
        caseId={caseId}
      /> */}
      <SupplyPaymentList
        paymentsSupply={paymentsSupply}
        deletePaymentSupply={deletePaymentSupply}
        caseId={caseId}
        updatePaymentSupply={updatePaymentSupply}
        itemsSupply={itemsSupply}
      />
      {/* </li> */}
    </div>
  );
}

export default SupplyContainer;
