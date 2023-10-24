import React from 'react';

function PatientImage({ patient: { profileImage } }) {
  return (
    <div
      className="col-4 text-center border d-flex align-items-center"
      style={{ height: '150px' }}
    >
      <img
        src={profileImage}
        className="img-fluid rounded-start"
        alt="patient"
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      ></img>
    </div>
  );
}

export default PatientImage;
