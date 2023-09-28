import React from 'react';
// import TreatmentHeader from './TreatmentHeader';
import TreatmentContent from './TreatmentContent';
import TreatmentFooter from './TreatmentFooter';

function Treatment() {
  return (
    <div className="card mb-3">
      {/* <TreatmentHeader /> */}
      <TreatmentContent />
      <TreatmentFooter />
    </div>
  );
}

export default Treatment;
