import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseEditForm from './CaseEditForm';

function CaseEdit({
  onCloseDropdown,
  caseData,
  caseId,
  patientId,
  fetchCases
  // isOpen,
  // setIsOpen
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <button
        className="dropdown-item"
        type="button"
        onClick={() => {
          onCloseDropdown();
          // setIsOpenModal(true);
        }}
      >
        แก้ไข
      </button>

      <Modal
        title="แก้ไขประวัติการรักษา"
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <CaseEditForm
          caseData={caseData}
          caseId={caseId}
          patientId={patientId}
          onSuccess={() => setIsOpenModal(false)}
          fetchCases={fetchCases}
        />
      </Modal>
    </div>
  );
}

export default CaseEdit;
