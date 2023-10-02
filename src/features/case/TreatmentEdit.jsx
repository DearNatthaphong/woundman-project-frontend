import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';

function TreatmentEdit() {
  const [isOpen, setIsOpen] = useState(false);

  // const saveTreatment = async (caseId, input) => {
  //   await caseService.creatTreatmentByCaseId(caseId, input);
  //   setIsOpen(false);
  // };
  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-sm btn-primary w-100"
      >
        แก้ไข
      </button>
      <Modal
        title="สร้างการรักษา"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* <TreatmentCreateForm onSubmit={saveTreatment} caseId={caseId} /> */}
      </Modal>
    </div>
  );
}

export default TreatmentEdit;
