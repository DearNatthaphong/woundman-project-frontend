import React from 'react';
import Avatar from '../../components/ui/Avatar';

function PatientImage({ patient: { profileImage } }) {
  return (
    <div className="col-4">
      <div className="row justify-content-center">
        <div className="col-9">
          <Avatar src={profileImage} size="70" />
        </div>
      </div>
    </div>
  );
}

export default PatientImage;
