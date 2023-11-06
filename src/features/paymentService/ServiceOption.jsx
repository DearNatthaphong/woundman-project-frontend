import React from 'react';

function ServiceOption({ item }) {
  const { title, price } = item;
  return <option value={title}>{`${title}, (${price} บ./หน่วย)`}</option>;
}

export default ServiceOption;
