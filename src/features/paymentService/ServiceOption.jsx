import React from 'react';
import numeral from 'numeral';

function ServiceOption({ item }) {
  const { title, price } = item;
  return (
    <option value={title}>{`${title}, (${numeral(price).format(
      '0,0.00'
    )} บ./หน่วย)`}</option>
  );
}

export default ServiceOption;
