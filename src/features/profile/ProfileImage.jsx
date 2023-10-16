import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../../components/ui/Avatar';
import ProfileImageEdit from './ProfileImageEdit';

function ProfileImage() {
  const { patient, staff } = useAuth();
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-12 text-center">
          <Avatar
            src={patient ? patient.profileImage : staff.profileImage}
            size={150}
          />
        </div>
        {staff && (
          <div className="col-12 text-center">
            <ProfileImageEdit />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileImage;
