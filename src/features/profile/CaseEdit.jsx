import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseForm from './CaseForm';

function CaseEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row justify-content-center my-3">
      <>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="col-12 col-lg-6 btn btn-primary"
        >
          สร้างการตรวจรักษา
        </button>
        <Modal
          title="สร้างประวัติและตรวจร่างกาย"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <CaseForm />
        </Modal>
      </>
    </div>
  );
}

export default CaseEdit;
