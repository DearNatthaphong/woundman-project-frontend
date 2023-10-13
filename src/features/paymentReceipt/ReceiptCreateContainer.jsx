import React from 'react';

function ReceiptCreateContainer() {
  return (
    <>
      <li className="list-group-item py-3">
        <div className="row justify-content-center">
          <div className="col-4">
            <p className="my-auto">ยอดชำระรวม</p>
          </div>
          <div className="col-4">
            <h5 className="my-auto">total amount</h5>
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
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                cash
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
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                transfer
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
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios3">
                card
              </label>
            </div>
          </div>
        </div>
      </li>
      <div className="card-footer">
        <div className="row justify-content-center">
          <button type="button" className="col-4 btn btn-primary w-100">
            ถัดไป
          </button>
        </div>
      </div>
    </>
  );
}

export default ReceiptCreateContainer;
