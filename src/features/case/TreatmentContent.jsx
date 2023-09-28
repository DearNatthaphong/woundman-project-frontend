import React from 'react';
import TreatmentImage from './TreatmentImage';
import TreatmentInfo from './TreatmentInfo';

function TreatmentContent() {
  return (
    <div className="card">
      <TreatmentImage />
      <TreatmentInfo />
    </div>
  );

  // /* <div classNameName="row align-items-center mb-0">
  //   <div classNameName="col-4 p-0">
  //     <TreatmentImage />
  //   </div>
  //   <div classNameName="col-8 p-0">
  //     <TreatmentInfo />
  //   </div>
  // </div> */
}

export default TreatmentContent;
