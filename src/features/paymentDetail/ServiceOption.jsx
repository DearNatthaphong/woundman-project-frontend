import React from 'react';
import Option from './Option';

function ServiceOption({ itemsService }) {
  return (
    <>
      {itemsService.map((item) => (
        <Option key={item.id} itemService={item} />
      ))}
    </>
  );
}

export default ServiceOption;
