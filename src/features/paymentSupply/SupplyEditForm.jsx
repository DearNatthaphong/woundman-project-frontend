import React from 'react';
import SupplyOption from './SupplyOption';

function SupplyEditForm() {
  return (
    <div className="input-group mb-3">
      <select
        className="form-select form-select-md"
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
      >
        <option defaultValue="รายการ">เลือกรายการ</option>
        {/* <SupplyOption
        // itemsService={itemsService}
        /> */}
      </select>

      <input
        className="form-control form-control-md"
        type="text"
        placeholder="จำนวน"
        // value={amount}
        // onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        //   onClick={handleSubmit}
      >
        บันทึกรายการ
      </button>
    </div>
  );
}

export default SupplyEditForm;
