import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import CaseCreateForm from './CaseCreateForm';

function CaseCreate({ createCase, selectedPatientId }) {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (selectedPatientId, input) => {
    await createCase(selectedPatientId, input);
    setIsOpen(false);
  };

  return (
    <div className="card p-1">
      <div className="row">
        <div className="col-auto pe-0">
          <h5 className="fw-bold p-3 my-auto">ประวัติสุขภาพ</h5>
        </div>
        <div className="col my-auto me-3 ps-0">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="btn btn-outline-primary py-2 ps-3 rounded-pill btn-sm text-start w-100"
          >
            <i className="fa-solid fa-plus fa-lg" />
            {' สร้างประวัติ'}
          </button>
          <Modal
            title="สร้างประวัติสุขภาพ"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <CaseCreateForm
              selectedPatientId={selectedPatientId}
              onSubmit={onSubmit}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CaseCreate;
