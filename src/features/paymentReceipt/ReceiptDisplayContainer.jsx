import React from 'react';
import Payment from './Payment';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import numeral from 'numeral';
import PaymentItem from '../../components/ui/PaymentItem';
// import { useAuth } from '../../contexts/AuthContext';

function ReceiptDisplayContainer({
  receipt,
  // formattedTotalPrice,
  deleteReceipt,
  caseId
}) {
  // const { staff, patient } = useAuth();
  const { Payments, id, method, totalPrice } = receipt;

  const { startLoading, stopLoading } = useLoading();

  const receiptId = id;

  // const formattedTotalPrice = totalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
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
      <div className="card m-1">
        <h5 className="card-header text-center">ใบเสร็จ</h5>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr className="align-middle">
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
                  {/* {`ราคา(บาท)`} */}
                </th>
              </tr>
            </thead>
            <tbody>
              {Payments?.map((item, index) => (
                // <Payment key={item.id} index={index} Payment={item} />
                <PaymentItem
                  key={index}
                  index={index}
                  payment={item}
                  caseId={caseId}
                />
              ))}
            </tbody>

            <thead>
              <tr>
                <th scope="row"></th>
                <td className="text-end" colSpan={2}>
                  ยอดชำระรวม
                </td>
                <td className="text-end pe-3">
                  {numeral(totalPrice).format('0,0.00')}
                </td>
                {/* <td>{totalPrice}</td> */}
              </tr>
            </thead>
          </table>
        </div>
        <div className="card-body pt-0">
          <div className="row justify-items-center">
            <div className="col-6 my-auto">
              {' '}
              {/* {staff && ( */}
              <button
                onClick={handleDelete}
                className="btn btn-danger btn-sm"
                type="button"
              >
                ลบใบเสร็จ
              </button>
              {/* )} */}
            </div>
            <div className="col-6">
              <p className="fw-bold text-end mb-1">ชำระเงินด้วยวิธี</p>
              <p className="text-end mb-0">{method}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ReceiptDisplayContainer;
