import React from 'react';

function Option({ itemService: { title, price } }) {
  return <option value={title}>{`${title}, ${price} บ./หน่วย`}</option>;
}

export default Option;
