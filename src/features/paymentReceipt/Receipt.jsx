import React, { useState } from 'react';
import PaymentItem from '../../components/ui/PaymentItem';
import numeral from 'numeral';
import { useLoading } from '../../contexts/LoadingContext';
import { toast } from 'react-toastify';
import CreatedBy from '../../components/ui/CreatedBy';
import Modal from '../../components/ui/Modal';

function Receipt({ receipt, caseId, deleteReceipt }) {
  const { Payments, id, method, totalPrice, image, Staff } = receipt;
  const { startLoading, stopLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    const receiptId = id;

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
    <div className="card my-3">
      <h5 className="card-header text-center">ใบเสร็จ</h5>
      <div className="card-body px-1">
        <div className="card">
          <div className="table-responsive">
            <table className="table table-striped align-middle m-0">
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
                  </th>
                </tr>
              </thead>
              <tbody>
                {Payments?.map((item, index) => (
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
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row ">
            <div className="col-auto my-auto">
              <button
                onClick={handleDelete}
                className="btn btn-danger btn-sm"
                type="button"
              >
                ลบใบเสร็จ
              </button>
            </div>
            <div className="col-auto ms-auto">
              <div className="row">
                {method === 'โอนเงิน' && (
                  <div className="col-auto my-auto">
                    <button
                      onClick={() => setIsOpen(true)}
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      รูปภาพ
                    </button>
                    <Modal
                      title="รูปภาพ"
                      open={isOpen}
                      onClose={() => setIsOpen(false)}
                    >
                      {image ? (
                        <img
                          src={image}
                          className="img-fluid"
                          alt="treatment"
                        />
                      ) : (
                        <span>No image available</span>
                      )}
                    </Modal>
                  </div>
                )}
                <div className="col-auto">
                  <p className="fw-bold text-end m-0">ชำระเงินด้วยวิธี</p>
                  <p className="text-end mb-0">{method}</p>
                </div>
              </div>
            </div>
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
