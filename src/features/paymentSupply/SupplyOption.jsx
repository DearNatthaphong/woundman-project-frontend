import React from 'react';

function SupplyOption({ itemSupply: { title, price } }) {
  return <option value={title}>{`${title}, ${price}บ./หน่วย`}</option>;
}

export default SupplyOption;
