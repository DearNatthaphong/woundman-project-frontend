import React from 'react';
import PaymentService from './PaymentService';
import PatientDetail from './PatientDetail';

function PaymentDetailBody({
  caseData,
  itemsService,
  caseId,
  createPaymentService,
  paymentsByTypeService,
  deletePayment
}) {
  return (
    <ul className="list-group list-group-flush">
      <PatientDetail caseData={caseData} />
      <PaymentService
        itemsService={itemsService}
        caseId={caseId}
        createPaymentService={createPaymentService}
        paymentsByTypeService={paymentsByTypeService}
        deletePayment={deletePayment}
      />
      {/* <li className="list-group-item py-3">
          <h5 className="text-center">2.ค่าเวชภัณฑ์</h5>
          <div className="input-group mb-3">
            <select className="form-select form-select-sm">
              <option defaultValue="รายการ">รายการ</option>
              <option value="1">Gauze(eye pad)</option>
              <option value="2">Gauze 3x3นิ้ว10ชิ้น</option>
              <option value="3">Gauze bandage 3 นิ้ว</option>
            </select>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="จำนวน"
            />
            <button className="btn btn-primary" type="button">
              เพิ่มรายการ
            </button>
          </div>
          <div>
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
                  <td>Gauze bandage 3 นิ้ว</td>
                  <td>2</td>
                  <td>50.00</td>
                  <td>
                    <button className="btn btn-danger btn-sm" type="button">
                      ลบ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li> */}
      {/* <li className="list-group-item py-3">
          <div className="col text-bg-light rounded">
            <h5 className="text-center">3.ค่ายา</h5>
            <div className="input-group mb-3">
              <select className="form-select form-select-sm">
                <option defaultValue="รายการ">รายการ</option>
                <option value="1">Amoxicillin 125mg./5ml. ขวด(60 ซีซี) </option>
                <option value="2">Amoxicillin 250 mg. แคปซูล</option>
                <option value="3">Amoxicillin 250mg./5ml. ขวด(60 ซีซี) </option>
              </select>
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="จำนวน"
              />
              <button className="btn btn-primary" type="button">
                เพิ่มรายการ
              </button>
            </div>
            <div>
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
                    <td> Amoxicillin 125mg./5ml. ขวด(60 ซีซี) </td>
                    <td>1</td>
                    <td>100.00</td>
                    <td>
                      <button className="btn btn-danger btn-sm" type="button">
                        ลบ
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li className="list-group-item py-3">
          <div className="row justify-content-center">
            <div className="col-4">
              <p className="my-auto">ยอดชำระรวม</p>
            </div>
            <div className="col-4">
              <h5 className="my-auto">420.00</h5>
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
                  value="option2"
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
                  value="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  บัตรเครดิต
                </label>
              </div>
            </div>
          </div>
        </li> */}
    </ul>
  );
}

export default PaymentDetailBody;
