import React, { useState } from 'react';
import validator from 'validator';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import ServiceOption from '../../features/paymentService/ServiceOption';

function PaymentForm({ items, onSubmit, caseId, isEdit, payment }) {
  const { startLoading, stopLoading } = useLoading();

  let initialState = {
    amount: 0,
    title: ''
  };

  // const [amount, setAmount] = useState(0);
  // const [title, setTitle] = useState('');

  if (isEdit) {
    initialState = {
      amount: payment.amount,
      title: payment.PaymentItem.title
    };
  }

  const [input, setInput] = useState(initialState);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const incrementAmount = () => {
    setInput({ ...input, amount: input.amount + 1 });
  };

  const decrementAmount = () => {
    if (input.amount > 0) {
      setInput({ ...input, amount: input.amount - 1 });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const isNumber = validator.isNumeric(input.amount.toString());

      if (!input.amount || !isNumber || !input.title || !input.title.trim()) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }

      const title = input.title;
      const amount = input.amount;
      if (isEdit) {
        const paymentId = payment.id;
        await onSubmit(caseId, paymentId, title, amount);
        toast.success('แก้ไขการจ่ายสำเร็จ');
      } else {
        await onSubmit(caseId, title, amount);
        toast.success('สร้างการจ่ายสำเร็จ');
        setInput({ amount: 0, title: '' });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="card p-2">
      <div className="row g-2">
        <div className="col-12 col-sm-6">
          <select
            className="form-select form-select-md"
            name="title"
            value={input.title}
            onChange={handleChangeInput}
          >
            <option value="">เลือกรายการ</option>
            {items?.map((item) => (
              <ServiceOption key={item.id} item={item} />
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
              name="amount"
              value={input.amount}
              onChange={handleChangeInput}
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
            {isEdit ? `แก้ไข` : `เพิ่มรายการ`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
