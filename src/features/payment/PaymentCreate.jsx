import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';

function PaymentCreate() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className=" btn btn-primary w-100"
      >
        สร้างการจ่ายเงิน
      </button>
      <Modal
        title="สร้างการจ่ายเงิน"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* <AppointmentCreateForm onSubmit={saveAppointment} caseId={caseId} /> */}
      </Modal>
    </div>
  );
}

export default PaymentCreate;
