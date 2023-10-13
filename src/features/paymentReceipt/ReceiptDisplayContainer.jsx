import React from 'react';
import Payment from './Payment';

function ReceiptDisplayContainer({ receipt, formattedTotalPrice }) {
  const { Payments } = receipt;

  return (
    <div className="card-body">
      <h5 className="text-center border ">ใบเสร็จ</h5>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">รายการ</th>
            <th scope="col">จำนวน</th>
            <th scope="col">{`ราคา(บาท)`}</th>
          </tr>
        </thead>
        <tbody>
          {Payments?.map((item, index) => (
            <Payment key={index} index={index} Payment={item} />
          ))}
        </tbody>
        <thead>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>ยอดชำระรวม</td>
            <td>{formattedTotalPrice}</td>
          </tr>
        </thead>
      </table>
      <button
        // onClick={handleDelete}
        className="btn btn-danger btn-sm w-100"
        type="button"
      >
        ลบ
      </button>
    </div>
  );
}

export default ReceiptDisplayContainer;
