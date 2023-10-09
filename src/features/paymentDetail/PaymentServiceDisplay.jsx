import React from 'react';

function PaymentServiceDisplay() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">รายการ</th>
          <th scope="col">จำนวน</th>
          <th scope="col">ราคา</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>ค่าตรวจทำแผลขนาดแห้ง/แผลเย็บ</td>
          <td>1</td>
          <td>300.00</td>
          <td>
            <button className="btn btn-danger btn-sm" type="button">
              ลบ
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PaymentServiceDisplay;
