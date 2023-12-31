import React, { useState } from 'react';
import StaffLoginForm from './StaffLoginForm';
import Modal from '../../components/ui/Modal';
import StaffRegisterForm from './StaffRegisterForm';

function StaffAuthForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="form-signin bg-white border shadow p-3 rounded-4  max-w-362">
      <StaffLoginForm />
      <hr />
      <div className="text-center mt-5">
        <p className="text-muted">โปรดลงทะเบียนก่อนเข้าระบบ</p>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary rounded-4"
          onClick={() => setIsOpen(true)}
        >
          ลงทะเบียน
        </button>
        <Modal
          title="ลงทะเบียนพนักงาน"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <StaffRegisterForm onSuccess={() => setIsOpen(false)} />
        </Modal>
      </div>
    </main>
  );
}

export default StaffAuthForm;
