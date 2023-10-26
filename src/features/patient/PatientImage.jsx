import React from 'react';
import Avatar from '../../components/ui/Avatar';

function PatientImage({ patient: { profileImage } }) {
  return (
    <div
      className="col-4 text-center d-flex justify-content-center px-3 pt-2"
      style={{ height: '100px' }}
    >
      {/* <img
        src={profileImage}
        className="img-fluid rounded-start"
        alt="patient"
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      ></img> */}
      <Avatar src={profileImage} size={80} />
    </div>
  );
}

export default PatientImage;
