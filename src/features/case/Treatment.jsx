import React from 'react';
import TreatmentContent from './TreatmentContent';
// import TreatmentFooter from './TreatmentFooter';
import TreatmentHeader from './TreatmentHeader';

function Treatment({ treatment, caseId, updateTreatment, deleteTreatment }) {
  return (
    <div className="card mt-2">
      <TreatmentHeader
        treatment={treatment}
        caseId={caseId}
        updateTreatment={updateTreatment}
        deleteTreatment={deleteTreatment}
      />
      <TreatmentContent treatment={treatment} />
      {/* <TreatmentFooter
    //   treatment={treatment}
    //   caseId={caseId}
    //   updateTreatment={updateTreatment}
    //   deleteTreatment={deleteTreatment}
    // /> */}
    </div>
  );
}

export default Treatment;
