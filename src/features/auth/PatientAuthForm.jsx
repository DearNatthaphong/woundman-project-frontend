import React, { useState } from 'react';
import PatientLoginForm from './PatientLoginForm';
import Modal from '../../components/ui/Modal';

function PatientAuthForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="form-signin bg-white border rounded-4 p-4 ">
      <PatientLoginForm />
      <hr />
      <div className="text-center mt-5">
        <p className="text-muted">โปรดลงทะเบียนก่อนเข้าระบบ</p>
        <button
          className="btn btn-primary rounded-4"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          ลงทะเบียน
        </button>
        <Modal title="Test" open={isOpen} onClose={() => setIsOpen(false)}>
          Modal Children Body
        </Modal>
      </div>
    </main>
  );
}

export default PatientAuthForm;
