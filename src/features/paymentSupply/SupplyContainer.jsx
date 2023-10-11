import React from 'react';
import SupplyCreate from './SupplyCreate';
import SupplyPaymentList from './SupplyPaymentList';

function SupplyContainer({ itemsSupply }) {
  return (
    <li className="list-group-item py-3">
      <h5 className="">2.ค่าเวชภัณฑ์</h5>
      <SupplyCreate itemsSupply={itemsSupply} />
      <SupplyPaymentList />
    </li>
  );
}

export default SupplyContainer;
