import React from 'react';

function AppointmentFilter({ status, onChange, handleFilter }) {
  return (
    <div className="input-group ">
      <select
        className="form-select"
        id="inputGroupSelect04"
        aria-label="Example select with button addon"
        value={status}
        onChange={onChange}
      >
        <option value="">เลือกทุกประเกทการนัดหมาย</option>
        <option value="รอดำเนินการ">รอดำเนินการ</option>
        <option value="ดำเนินการเสร็จไปแล้ว">ดำเนินการเสร็จไปแล้ว</option>
        <option value="ยกเลิก">ยกเลิก</option>
      </select>
      <button
        onClick={handleFilter}
        className="btn btn-outline-secondary"
        type="button"
      >
        ค้นหา
      </button>
    </div>
  );
}

export default AppointmentFilter;
