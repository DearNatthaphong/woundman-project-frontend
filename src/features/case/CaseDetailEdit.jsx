import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseDetailEditForm from './CaseDetailEditForm';

function CaseDetailEdit({ caseData, setCaseData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="list-group-item m-1">
      <div className="row ">
        <div className="col-12 text-center">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="col-12 col-lg-6 btn btn-info"
          >
            แก้ไขข้อมูล
          </button>
          <Modal
            title="แก้ไขข้อมูลการตรวจรักษา"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <CaseDetailEditForm
              onSuccess={() => setIsOpen(false)}
              caseData={caseData}
              setCaseData={setCaseData}
            />
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default CaseDetailEdit;
