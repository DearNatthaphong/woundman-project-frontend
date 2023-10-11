import React from 'react';
import ServiceOption from './ServiceOption';

function ServiceOptionList({ itemsService }) {
  return (
    <>
      {itemsService.map((item) => (
        <ServiceOption key={item.id} itemService={item} />
      ))}
    </>
  );
}

export default ServiceOptionList;
