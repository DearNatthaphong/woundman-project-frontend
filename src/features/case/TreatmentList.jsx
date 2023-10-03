import React from 'react';
import Treatment from './Treatment';

function TreatmentList({
  treatments,
  caseId,
  updateTreatment,
  deleteTreatment
}) {
  return (
    <div>
      {treatments.map((item) => (
        <Treatment
          key={item.id}
          treatment={item}
          caseId={caseId}
          updateTreatment={updateTreatment}
          deleteTreatment={deleteTreatment}
        />
      ))}
    </div>
  );
}

export default TreatmentList;
