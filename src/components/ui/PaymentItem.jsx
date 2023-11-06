import React, { useCallback, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import Modal from './Modal';
import PaymentForm from './PaymentForm';
import PaymentDeleteForm from './PaymentDeleteForm';

function PaymentItem({
  updatePayment,
  itemsType,
  caseId,
  deletePayment,
  index,
  payment
}) {
  const { amount, price, PaymentItem } = payment;
  const { title } = PaymentItem;

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onUpdate = async (caseId, paymentId, title, amount) => {
    await updatePayment(caseId, paymentId, title, amount);
    setIsOpenDropdown(false);
    setIsOpenEditModal(false);
  };

  const onDelete = async (caseId, paymentId) => {
    await deletePayment(caseId, paymentId);
    setIsOpenDropdown(false);
    setIsOpenDeleteModal(false);
  };

  return (
    <tr className="align-self-center">
      <th className="py-0 pe-0" scope="row">
        {index + 1}
      </th>
      <td className="py-0 pe-0 align-self-center">{title}</td>
      <td className="py-0 pe-0 align-self-center text-center">{amount}</td>
      <td className="py-0 pe-0 align-self-center">{price}</td>
      <td className="py-0 pe-0 align-self-center">
        <div className="btn-group" ref={dropdownEl}>
          <button
            type="button"
            onClick={() => setIsOpenDropdown((prev) => !prev)}
            className="btn btn-sm btn-outline-secondary border border-0 rounded-circle"
            // data-bs-toggle="dropdown"
            // aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis" />
          </button>
          <ul
            className={`dropdown-menu end-0${isOpenDropdown ? ' d-block' : ''}`}
          >
            <li>
              <button
                onClick={(e) => {
                  // e.stopPropagation();
                  // setIsOpenDropdown(false);
                  setIsOpenEditModal(true);
                }}
                className="dropdown-item"
              >
                แก้ไข
              </button>
              <Modal
                title="แก้ไข"
                open={isOpenEditModal}
                onClose={() => {
                  setIsOpenEditModal(false);
                  setIsOpenDropdown(false);
                }}
              >
                <PaymentForm
                  items={itemsType}
                  onSubmit={onUpdate}
                  caseId={caseId}
                  isEdit={true}
                  payment={payment}
                />
              </Modal>
            </li>
            <li>
              <button
                onClick={(e) => {
                  // e.stopPropagation();
                  // setIsOpenDropdown(false);
                  setIsOpenDeleteModal(true);
                }}
                className="dropdown-item"
              >
                ลบ
              </button>
              <Modal
                title="ยันยันการลบ"
                open={isOpenDeleteModal}
                onClose={() => {
                  setIsOpenDeleteModal(false);
                  setIsOpenDropdown(false);
                }}
              >
                <PaymentDeleteForm
                  payment={payment}
                  caseId={caseId}
                  onSubmit={onDelete}
                  onClose={() => {
                    setIsOpenDeleteModal(false);
                    setIsOpenDropdown(false);
                  }}
                />
              </Modal>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

export default PaymentItem;
