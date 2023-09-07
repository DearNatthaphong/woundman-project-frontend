import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import ProfileImageForm from './ProfileImageForm';
import ProfileInfoForm from './ProfileInfoForm';

function ProfileEdit({ isMe }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row justify-content-center my-3">
      <>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="col-12 col-lg-6 btn btn-primary"
        >
          แก้ไขข้อมูล
        </button>
        <Modal
          title="แก้ไขข้อมูลส่วนตัว"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <ProfileImageForm isMe={isMe} />
          <ProfileInfoForm />
        </Modal>
      </>
    </div>
  );
}

export default ProfileEdit;
