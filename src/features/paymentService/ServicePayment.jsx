import React, { useCallback, useState } from 'react';
import ServiceEdit from './ServiceEdit';
import ServiceDelete from './ServiceDelete';
import { useClickOutside } from '../../hooks/useClickOutside';
import Modal from '../../components/ui/Modal';
import ServiceEditForm from './ServiceEditForm';
import PaymentForm from '../../components/ui/PaymentForm';
import PaymentDeleteForm from '../../components/ui/PaymentDeleteForm';

function ServicePayment({
  updatePaymentService,
  itemsService,
  caseId,
  deletePaymentService,
  index,
  paymentService
}) {
  const { amount, price, PaymentItem } = paymentService;
  const { title } = PaymentItem;

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const onUpdate = async (caseId, paymentId, title, amount) => {
    await updatePaymentService(caseId, paymentId, title, amount);
    setIsOpenDropdown(false);
    setIsOpenEditModal(false);
  };

  const onDelete = async (caseId, paymentId) => {
    await deletePaymentService(caseId, paymentId);
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
                  items={itemsService}
                  onSubmit={onUpdate}
                  caseId={caseId}
                  isEdit={true}
                  payment={paymentService}
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
                  payment={paymentService}
                  caseId={caseId}
                  onSubmit={onDelete}
                  onClose={() => {
                    setIsOpenDeleteModal(false);
                    setIsOpenDropdown(false);
                  }}
                />
                {/* <AppointmentDeleteForm
                    appointment={appointment}
                    caseId={caseId}
                    onSubmit={onDelete}
                    onClose={() => {
                      setIsOpenDeleteModal(false);
                      setIsOpenDropdown(false);
                    }}
                  /> */}
              </Modal>
            </li>
          </ul>
        </div>
      </td>

      {/* <ServiceEdit
        itemsService={itemsService}
        updatePaymentService={updatePaymentService}
        caseId={caseId}
        id={id}
        title={title}
        amount={amount}
      />

      <ServiceDelete
        caseId={caseId}
        deletePaymentService={deletePaymentService}
        id={id}
      /> */}
    </tr>
  );
}

export default ServicePayment;
