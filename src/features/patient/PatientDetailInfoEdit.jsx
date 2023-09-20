import React, { useState } from 'react';
import PatientDetailInfoForm from './PatientDetailInfoForm';
import Modal from '../../components/ui/Modal';

function PatientDetailInfoEdit({ id, patient, setPatient }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="list-group-item m-1">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="col-12 col-lg-6 btn btn-primary"
          >
            แก้ไขข้อมูล
          </button>
          <Modal
            title="แก้ไขข้อมูลส่วนตัว"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <PatientDetailInfoForm
              onSuccess={() => setIsOpen(false)}
              patient={patient}
              id={id}
              setPatient={setPatient}
            />
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default PatientDetailInfoEdit;
