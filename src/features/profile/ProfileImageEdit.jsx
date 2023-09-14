import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import ProfileImageForm from './ProfileImageForm';

function ProfileImageEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row justify-content-center my-3">
      <>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="col-12 col-lg-6 btn btn-primary"
        >
          แก้ไขรูปภาพ
        </button>
        <Modal
          title="แก้ไขข้อมูลส่วนตัว"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <ProfileImageForm onSuccess={() => setIsOpen(false)} />
        </Modal>
      </>
    </div>
  );
}

export default ProfileImageEdit;
