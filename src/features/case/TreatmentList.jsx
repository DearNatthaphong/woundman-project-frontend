import React from 'react';
import Treatment from './Treatment';

function TreatmentList({ treatments }) {
  return (
    <div>
      {treatments.map((item) => (
        <Treatment key={item.id} treatment={item} />
      ))}
    </div>
  );
}

export default TreatmentList;
