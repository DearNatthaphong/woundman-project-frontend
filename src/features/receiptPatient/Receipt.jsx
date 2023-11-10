import React from 'react';
import Payment from '../paymentReceipt/Payment';
import * as dateService from '../../utils/dateFormat';
import numeral from 'numeral';
import PaymentItem from '../../components/ui/PaymentItem';

function Receipt({ receipt }) {
  const { Payments, chiefComplain } = receipt.Case;
  const { method, totalPrice, createdAt } = receipt;

  // const formattedTotalPrice = totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="card p-0">
      <div className="card-header">{dateService.formattedDate(createdAt)}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="card">
            <div className="card-body">{`อาการเจ็บป่วย :  ${chiefComplain}`}</div>
          </div>
        </li>
      </ul>
      <div className="card-body">
        <div className="card">
          <div className="table-responsive">
            <table className="table table-striped align-middle">
              <thead>
                <tr className="align-bottom">
                  <th className="my-auto" scope="col">
                    #
                  </th>
                  <th scope="col">รายการ</th>
                  <th className="text-center" scope="col">
                    จำนวน
                  </th>
                  <th className="text-end pe-3" scope="col">
                    <div>ราคา</div>
                    <div>{`(บาท)`}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Payments?.map((item, index) => (
                  // <Payment key={index} index={index} Payment={item} />
                  <PaymentItem key={item.id} index={index} payment={item} />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row"></th>
                  <td className="text-end" colSpan={2}>
                    ยอดชำระรวม
                  </td>
                  <td className="text-end pe-3">
                    {numeral(totalPrice).format('0,0.00')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p className="text-end mb-0">{`ชำระเงินด้วยวิธี`}</p>
          <p className="text-end fw-bold mb-0">{method}</p>
        </li>
      </ul>
    </div>
  );
}

export default Receipt;
