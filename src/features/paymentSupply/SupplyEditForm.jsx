import React, { useEffect, useState } from 'react';
import SupplyOption from './SupplyOption';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import validator from 'validator';

function SupplyEditForm({
  itemsSupply,
  caseId,
  onSubmit,
  id,
  title: propTitle,
  amount: propAmount
}) {
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const paymentId = parseInt(id, 10);

  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    setAmount(propAmount);
    setTitle(propTitle);
  }, [propAmount, propTitle]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const isNumber = validator.isNumeric(amount);

      if (!amount || !isNumber || !title || !title.trim()) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }

      startLoading();
      await onSubmit(caseId, paymentId, title, amount);
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
        className="form-select form-select-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      >
        <option defaultValue="รายการ">เลือกรายการ</option>
        {itemsSupply.map((item) => (
          <SupplyOption key={item.id} itemSupply={item} />
        ))}
      </select>

      <input
        className="form-control form-control-md"
        type="text"
        placeholder="จำนวน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="btn btn-primary" type="button" onClick={handleSubmit}>
        บันทึกรายการ
      </button>
    </div>
  );
}

export default SupplyEditForm;
