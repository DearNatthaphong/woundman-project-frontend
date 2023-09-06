import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileFooter from './ProfileFooter';
import { useAuth } from '../../contexts/AuthContext';

function ProfileContainer() {
  const { staff } = useAuth();
  const { id } = useParams();

  return (
    <div className="row justify-content-center">
      <div className="col col-md-6">
        <div className="card border-dark mb-3">
          <ProfileHeader />
          <ProfileInfo />
          {/* {staff && <ProfileFooter isMe={!id} />} */}
          <ProfileFooter isMe={!id} />
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
