import React from 'react';
import * as patientService from '../../api/newPatientApi';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function CaseDeleteForm({ caseId, patientId, onSuccess, onClose, fetchCases }) {
  const { startLoading, stopLoading } = useLoading();

  const deleteCaseByPatientId = async (patientId, caseId) => {
    try {
      await patientService.deleteCaseByPatientId(patientId, caseId);
      fetchCases(patientId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      await deleteCaseByPatientId(patientId, caseId);
      toast.success('ลบข้อมูลการตรวจรักษาสำเร็จ');
      onSuccess();
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
          onClick={onClose}
          type="button"
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
