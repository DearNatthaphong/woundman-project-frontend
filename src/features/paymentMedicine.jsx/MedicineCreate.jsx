import React from 'react';
import MedicineOption from './MedicineOption';

function MedicineCreate({ itemsMedicine }) {
  return (
    <div className="input-group mb-3">
      <select className="form-select form-select-sm">
        <option defaultValue="รายการ">รายการ</option>
        {itemsMedicine.map((item) => (
          <MedicineOption key={item.id} item={item} />
        ))}
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

export default MedicineCreate;
