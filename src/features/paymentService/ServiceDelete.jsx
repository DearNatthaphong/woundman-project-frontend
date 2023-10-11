import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function ServiceDelete({ caseId, deletePayment, id }) {
  const { startLoading, stopLoading } = useLoading();

  const paymentId = id;

  const handleDelete = async () => {
    try {
      startLoading();
      await deletePayment(caseId, paymentId);
      toast.success('ลบข้อมูลการจ่ายสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error('ลบข้อมูลการจ่ายไม่สำเร็จ');
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <td>
      <button
        onClick={handleDelete}
        className="btn btn-danger btn-sm"
        type="button"
      >
        ลบ
      </button>
    </td>
  );
}

export default ServiceDelete;
