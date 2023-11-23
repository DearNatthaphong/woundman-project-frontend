import React from 'react';
import Treatment from './Treatment';

function TreatmentList({ treatments }) {
  return (
    // <div className="row row-cols-1 row-cols-sm-2 g-2 g-sm-3 justify-content-center">
    <>
      {treatments.map((item) => (
        <Treatment key={item.id} treatment={item} />
      ))}
    </>
  );
}

export default TreatmentList;
