import React, { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import numeral from 'numeral';

function ReceiptCreateContainer({
  createReceipt,
  // formattedTotalPrice,
  totalPrice,
  caseId
}) {
  const [method, setMethod] = useState('');

  // const convertedTotalPrice = formattedTotalPrice
  //   ? formattedTotalPrice.replace(/,/g, '')
  //   : null;

  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      if (!method || totalPrice === null) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }

      if (totalPrice) {
        await createReceipt(caseId, totalPrice, method);
        setMethod('');
        toast.success('สร้างใบเสร็จสำเร็จ');
      }
    } catch (err) {
      console.log(err);
      toast.error('สร้างใบเสร็จไม่สำเร็จ');
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      {/* <li className="list-group-item py-3"> */}
      <div className="card mt-3">
        <div className="card-body px-0">
          <div className="row justify-content-center m-0 p-0">
            <div className="col-4 m-0 p-0">
              <p className="my-auto">ยอดชำระรวม</p>
            </div>
            <div className="col-4 p-0">
              <h5 className="my-auto">
                {numeral(totalPrice).format('0,0.00')}
              </h5>
            </div>
            <div className="col-2 p-0">
              <p className="my-auto">บาท</p>
            </div>
          </div>
        </div>
      </div>
      {/* </li> */}
      {/* <li className="list-group-item py-3"> */}
      <div className="card mt-3">
        <div className="card-body">
          <p className="text-center">ชำระเงินด้วยวิธี</p>
          <div className="row">
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="เงินสด"
                  onChange={(e) => setMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  เงินสด
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="โอนเงิน"
                  onChange={(e) => setMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  โอนเงิน
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="บัตรเครดิต"
                  onChange={(e) => setMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  บัตรเครดิต
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </li> */}
      <div className="card my-3">
        <div className="card-body">
          <div className="row justify-content-center justify-items-center">
            <div className="col text-center">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary w-50"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiptCreateContainer;
