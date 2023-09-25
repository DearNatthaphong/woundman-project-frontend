import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseEditForm from './CaseEditForm';

function CaseEdit({ caseData, caseId, patientId, fetchCases }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="dropdown-item "
        type="button"
        onClick={() => setIsOpen(true)}
      >
        แก้ไข
      </button>
      <Modal
        title="แก้ไขประวัติการรักษา"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CaseEditForm
          caseData={caseData}
          caseId={caseId}
          patientId={patientId}
          onSuccess={() => setIsOpen(false)}
          fetchCases={fetchCases}
        />
      </Modal>
    </div>
  );
}

export default CaseEdit;
