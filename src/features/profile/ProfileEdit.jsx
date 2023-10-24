import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import StaffEditForm from './StaffEditForm';
import { useAuth } from '../../contexts/AuthContext';
import PatientEditForm from './PatientEditForm';

function ProfileEdit({
  isStaffProfile,
  isSelectedPatientProfile,
  updatePatient,
  selectedPatient,
  selectedPatientId
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { updateStaff } = useAuth();

  const onSubmit = async (input) => {
    await updateStaff(input);
    setIsOpen(false);
  };

  const onSubmitPatient = async (patientId, input) => {
    await updatePatient(patientId, input);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="btn btn-primary btn-sm"
      >
        <i className="fas fa-pen" />
        {` แก้ไข`}
      </button>
      <Modal
        title="แก้ไขข้อมูลส่วนตัว"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {isStaffProfile && <StaffEditForm onSubmit={onSubmit} />}
        {isSelectedPatientProfile && (
          <PatientEditForm
            onSubmitPatient={onSubmitPatient}
            selectedPatient={selectedPatient}
            selectedPatientId={selectedPatientId}
          />
        )}
      </Modal>
    </div>
  );
}

export default ProfileEdit;
