import React from 'react';
import TreatmentContent from './TreatmentContent';
import TreatmentFooter from './TreatmentFooter';

function Treatment({ treatment, caseId, updateTreatment, deleteTreatment }) {
  return (
    <div className="card mb-3">
      <TreatmentContent treatment={treatment} />
      <TreatmentFooter
        treatment={treatment}
        caseId={caseId}
        updateTreatment={updateTreatment}
        deleteTreatment={deleteTreatment}
      />
    </div>
  );
}

export default Treatment;
