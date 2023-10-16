import React from 'react';

function PatientImage({ patient: { profileImage } }) {
  return (
    <div className="col-4 text-center border">
      <img
        src={profileImage}
        className="img-fluid rounded-start"
        alt="patient"
      ></img>
    </div>
  );
}

export default PatientImage;
