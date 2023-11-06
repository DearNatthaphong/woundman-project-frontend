import React, { useState } from 'react';
import validator from 'validator';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import ServiceOption from './ServiceOption';

function ServiceCreate({ items, createPaymentService, caseId }) {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');

  const incrementAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decrementAmount = () => {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const isNumber = validator.isNumeric(amount);

      if (!amount || !isNumber || !title || !title.trim()) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }
      await createPaymentService(caseId, title, amount);
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
    <div className="row g-2">
      <div className="col-12 col-sm-6">
        <select
          className="form-select form-select-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option defaultValue="รายการ">เลือกรายการ</option>
          {items.map((item) => (
            <ServiceOption key={item.id} itemService={item} />
          ))}
        </select>
      </div>
      <div className="col-5 col-sm-3 text-start text-center-sm align-self-center">
        <div className="input-group max-w-140">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={incrementAmount}
          >
            <i className="fa-solid fa-plus" />
          </button>
          <input
            className="form-control text-center p-1"
            type="text"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={decrementAmount}
          >
            <i className="fa-solid fa-minus" />
          </button>
        </div>
      </div>
      <div className="col-7 col-sm-3 text-end">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          เพิ่มรายการ
        </button>
      </div>
    </div>
  );
}

export default ServiceCreate;
