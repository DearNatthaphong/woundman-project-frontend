import React from 'react';
import Payment from '../paymentReceipt/Payment';
import * as dateService from '../../utils/dateFormat';

function Receipt({ receipt }) {
  const { Payments, chiefComplain } = receipt.Case;
  const { method, totalPrice, createdAt } = receipt;

  const formattedTotalPrice = totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="card p-0">
      <div className="card-header">{dateService.formattedDate(createdAt)}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h1 className="text-center">ใบเสร็จ</h1>
        </li>
        <li className="list-group-item">{`อาการเจ็บป่วย :  ${chiefComplain}`}</li>
      </ul>
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
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end">
              ยอดชำระรวม
            </td>
            <td>{formattedTotalPrice}</td>
          </tr>
        </tfoot>
      </table>

      <li className="list-group-item">
        <p className="text-end me-3 ">{`ชำระเงินด้วยวิธี : ${method}`}</p>
      </li>
    </div>
  );
}

export default Receipt;
