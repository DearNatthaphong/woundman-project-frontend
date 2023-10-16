import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import ProfileImageForm from './ProfileImageForm';

function ProfileImageEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-primary btn-sm"
      >
        แก้ไขรูปภาพ
      </button>
      <Modal title="แก้ไขรูปภาพ" open={isOpen} onClose={() => setIsOpen(false)}>
        <ProfileImageForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

export default ProfileImageEdit;
