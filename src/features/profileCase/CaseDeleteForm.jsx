// import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function CaseDeleteForm({ onSubmit, selectedPatientId, caseData, onClose }) {
  const { startLoading, stopLoading } = useLoading();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const caseId = caseData?.id;
    const patientId = selectedPatientId;

    try {
      startLoading();
      await onSubmit(patientId, caseId);
      toast.success('ลบข้อมูลการตรวจรักษาสำเร็จ');
      //   onClose();
    } catch (err) {
      toast.error('ลบข้อมูลการตรวจรักษาไม่สำเร็จ');
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row" onSubmit={handleSubmitForm}>
      <div className="col-6 text-center">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-lg btn-primary rounded-4 px-5"
        >
          ไม่
        </button>
      </div>
      <div className="col-6 text-center">
        <button type="submit" className="btn btn-lg btn-danger rounded-4 px-5">
          ใช่
        </button>
      </div>
    </form>
  );
}

export default CaseDeleteForm;
