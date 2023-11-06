import React, { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function AppointmentForm({ onSubmit, caseId, isEdit, appointment }) {
  const { startLoading, stopLoading } = useLoading();
  let initialState = {
    reason: '',
    appointmentDate: '',
    status: 'รอดำเนินการ'
  };

  if (isEdit) {
    initialState = { ...appointment };
  }

  const [input, setInput] = useState(initialState);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      if (
        !input.reason ||
        !input.reason.trim() ||
        !input.appointmentDate ||
        !input.status
      ) {
        return toast.error('ข้อมูลไม่ครบ');
      }
      if (isEdit) {
        const appointmentId = appointment.id;
        await onSubmit(caseId, appointmentId, input);
        toast.success('แก้ไขการรักษาสำเร็จ');
      } else {
        await onSubmit(caseId, input);
        toast.success('สร้างการรักษาสำเร็จ');
        setInput({ reason: '', appointmentDate: '', status: 'รอดำเนินการ' });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row row-cols-1 g-3">
      <div className="col">
        <input
          type="text"
          className="form-control"
          placeholder="เหตุผล"
          name="reason"
          value={input.reason}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col">
        <input
          type="date"
          className="form-control"
          placeholder="วันนัดหมาย"
          name="appointmentDate"
          value={input.appointmentDate}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col">
        <select
          className="form-select"
          name="status"
          value={input.status}
          onChange={handleChangeInput}
        >
          <option value="รอดำเนินการ">รอดำเนินการ</option>
          <option value="ดำเนินการเสร็จไปแล้ว">ดำเนินการเสร็จไปแล้ว</option>
          <option value="ยกเลิก">ยกเลิก</option>
        </select>
      </div>
      <div className="col pt-3">
        <button
          type="submit"
          className="w-100 btn btn-md btn-success rounded-4"
        >
          ยืนยัน
        </button>
      </div>
    </form>
  );
}

export default AppointmentForm;
