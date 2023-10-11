import React from 'react';
import SupplyOption from './SupplyOption';

function SupplyCreate({ itemsSupply }) {
  return (
    <div className="input-group mb-3">
      <select className="form-select form-select-sm">
        <option defaultValue="รายการ">รายการ</option>
        {itemsSupply.map((item) => (
          <SupplyOption key={item.id} itemSupply={item} />
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

export default SupplyCreate;
