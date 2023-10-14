import React, { useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';

function ReceiptCreateContainer({
  createReceipt,
  formattedTotalPrice,
  caseId
}) {
  const [method, setMethod] = useState('');

  const convertedTotalPrice = formattedTotalPrice
    ? formattedTotalPrice.replace(/,/g, '')
    : null;

  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!method || convertedTotalPrice === null) {
        return toast.error('ข้อมูลไม่ครบหรือข้อมูลไม่ถูกต้อง');
      }

      if (convertedTotalPrice) {
        const totalPrice = convertedTotalPrice;
        startLoading();
        await createReceipt(caseId, totalPrice, method);
        setMethod('');
        toast.success('สร้างการจ่ายสำเร็จ');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <>
      <li className="list-group-item py-3">
        <div className="row justify-content-center">
          <div className="col-4">
            <p className="my-auto">ยอดชำระรวม</p>
          </div>
          <div className="col-4">
            <h5 className="my-auto">{formattedTotalPrice}</h5>
          </div>
          <div className="col-2">
            <p className="my-auto">บาท</p>
          </div>
        </div>
      </li>
      <li className="list-group-item py-3">
        <p className="text-center">ชำระเงินด้วยวิธี</p>
        <div className="row">
          <div className="col-3">
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
          <div className="col-5">
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
      </li>
      <div className="card-footer">
        <div className="row justify-content-center">
          <button
            onClick={handleSubmit}
            type="button"
            className="col-4 btn btn-primary w-100"
          >
            ถัดไป
          </button>
        </div>
      </div>
    </>
  );
}

export default ReceiptCreateContainer;
