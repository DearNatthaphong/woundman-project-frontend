import React from 'react';
import ServiceOption from './ServiceOption';

function PaymentServiceCreate({ itemsService }) {
  return (
    <div className="input-group mb-3">
      <select className="form-select form-select-md">
        <option defaultValue="รายการ">เลือกรายการ</option>
        <ServiceOption itemsService={itemsService} />
      </select>

      <input
        className="form-control form-control-md"
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
