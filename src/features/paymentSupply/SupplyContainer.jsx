import React from 'react';
import SupplyCreate from './SupplyCreate';
import SupplyPaymentList from './SupplyPaymentList';

function SupplyContainer({
  itemsSupply,
  createPaymentSupply,
  paymentsSupply,
  caseId,
  deletePaymentSupply
}) {
  return (
    <li className="list-group-item py-3">
      <h5 className="">2.ค่าเวชภัณฑ์</h5>
      <SupplyCreate
        itemsSupply={itemsSupply}
        createPaymentSupply={createPaymentSupply}
        caseId={caseId}
      />
      <SupplyPaymentList
        paymentsSupply={paymentsSupply}
        deletePaymentSupply={deletePaymentSupply}
        caseId={caseId}
      />
    </li>
  );
}

export default SupplyContainer;
