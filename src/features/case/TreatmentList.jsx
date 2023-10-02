import React from 'react';
import Treatment from './Treatment';

function TreatmentList({ treatments, caseId, updateTreatment }) {
  return (
    <div>
      {treatments.map((item) => (
        <Treatment
          key={item.id}
          treatment={item}
          caseId={caseId}
          updateTreatment={updateTreatment}
        />
      ))}
    </div>
  );
}

export default TreatmentList;
