import React from 'react';
import TreatmentContent from './TreatmentContent';
import TreatmentFooter from './TreatmentFooter';

function Treatment({ treatment }) {
  return (
    <div className="card mb-3">
      <TreatmentContent treatment={treatment} />
      <TreatmentFooter />
    </div>
  );
}

export default Treatment;
