import React from 'react';
import PaymentItem from '../../components/ui/PaymentItem';
import * as dateService from '../../utils/dateFormat';
import numeral from 'numeral';
import CreatedBy from '../../components/ui/CreatedBy';

function Receipt({ receipt }) {
  const { method, totalPrice, createdAt, Case, Staff } = receipt;
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card p-0">
      <div className="card-header">{dateService.formattedDate(createdAt)}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="card">
            <div className="card-body p-2">
              <p className="m-0">
                อาการเจ็บป่วย :{' '}
                <span className="fw-bold">{Case?.chiefComplain}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="card-body py-2">
        <div className="card">
          <div className="table-responsive">
            <table className="table table-striped align-middle m-0">
              <thead>
                <tr className="align-bottom">
                  <th className="my-auto" scope="col">
                    #
                  </th>
                  <th scope="col">รายการ</th>
                  <th className="text-center" scope="col">
                    จำนวน
                  </th>
                  <th className="text-end pe-3 pt-1" scope="col">
                    <div>ราคา</div>
                    <div>{`(บาท)`}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Case?.Payments?.map((item, index) => (
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
          <div className="row">
            <div className="col-auto">
              <p className="m-0">
                ชำระเงินด้วยวิธี : <span className="fw-bold">{method}</span>
              </p>
            </div>
            {/* <div className="col-auto ms-auto">
              <button className="btn btn-sm btn-outline-primary">
                รูปภาพ
              </button>
              <Modal
                    title="รูปภาพ"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <img src={image} className="img-fluid" alt="treatment" />
                  </Modal>
            </div> */}
          </div>
        </li>
        <li className="list-group-item">
          <CreatedBy
            titleName={Staff?.titleName}
            firstName={Staff?.firstName}
            lastName={Staff?.lastName}
            role={Staff?.role}
          />
        </li>
      </ul>
    </div>
  );
}

export default Receipt;
