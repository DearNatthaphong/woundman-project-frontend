import React from 'react';
import Payment from './Payment';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function ReceiptDisplayContainer({
  receipt,
  formattedTotalPrice,
  deleteReceipt,
  caseId
}) {
  const { Payments, id } = receipt;

  const { startLoading, stopLoading } = useLoading();

  const receiptId = id;

  const handleDelete = async () => {
    try {
      startLoading();
      await deleteReceipt(caseId, receiptId);
      toast.success('ลบข้อมูลการจ่ายสำเร็จ');
    } catch (err) {
      console.log(err);
      toast.error('ลบข้อมูลการจ่ายไม่สำเร็จ');
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    Payments && (
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
          onClick={handleDelete}
          className="btn btn-danger btn-sm w-100"
          type="button"
        >
          ลบ
        </button>
      </div>
    )
  );
}

export default ReceiptDisplayContainer;
