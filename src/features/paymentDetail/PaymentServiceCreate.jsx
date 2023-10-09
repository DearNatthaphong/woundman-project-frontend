import React from 'react';
import ServiceOption from './ServiceOption';

function PaymentServiceCreate() {
  return (
    <div className="input-group mb-3">
      <select className="form-select form-select-sm">
        <option defaultValue="รายการ">รายการ</option>
        <ServiceOption />
      </select>
      <input
        className="form-control form-control-sm"
        type="text"
        placeholder="จำนวน"
      />
      <button className="btn btn-primary" type="button">
        เพิ่มรายการ
      </button>
    </div>
  );
}

export default PaymentServiceCreate;
