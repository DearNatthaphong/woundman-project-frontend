import React from 'react';

function ServiceOption({ itemService: { title, price } }) {
  return <option value={title}>{`${title}, ${price} บ./หน่วย`}</option>;
}

export default ServiceOption;
