import React, { useState } from 'react';
import PatientDetailInfoForm from './PatientDetailInfoForm';
import Modal from '../../components/ui/Modal';

function PatientDetailInfoEdit({ patientId, patient, setPatient }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="list-group-item m-1">
      <div className="row ">
        <div className="col-12 text-center">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="btn btn-info"
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
              patientId={patientId}
              setPatient={setPatient}
            />
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default PatientDetailInfoEdit;
