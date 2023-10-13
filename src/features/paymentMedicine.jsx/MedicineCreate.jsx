import React, { useState } from 'react';
import validator from 'validator';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import MedicineOption from './MedicineOption';

function MedicineCreate({ itemsMedicine, caseId, createPaymentMedicine }) {
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');

  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const isNumber = validator.isNumeric(amount);

      if (!amount || !isNumber || !title || !title.trim()) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }

      startLoading();
      await createPaymentMedicine(caseId, title, amount);
      setAmount('');
      setTitle('');
      toast.success('สร้างการจ่ายสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <div className="input-group mb-3">
      <select
        className="form-select form-select-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      >
        <option defaultValue="รายการ">เลือกรายการ</option>
        {itemsMedicine.map((item) => (
          <MedicineOption key={item.id} itemMedicine={item} />
        ))}
      </select>
      <input
        className="form-control form-control-sm"
        type="text"
        placeholder="จำนวน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-primary" type="button" onClick={handleSubmit}>
        เพิ่มรายการ
      </button>
    </div>
  );
}

export default MedicineCreate;
