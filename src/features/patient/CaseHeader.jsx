// import React, { useCallback, useState } from 'react';
import React, { useState } from 'react';
// import CaseEdit from './CaseEdit';
import * as dateFormat from '../../utils/dateFormat';
// import { useClickOutside } from '../../hooks/useClickOutside';
import CaseEditForm from './CaseEditForm';
import CaseDeleteForm from './CaseDeleteForm';
import Modal from '../../components/ui/Modal';

function CaseHeader({ caseId, patientId, caseData, fetchCases }) {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  // const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  // const dropdownEl = useClickOutside(closeDropdown);

  return (
    <div className="card-header">
      <div className="row align-items-center">
        <div className="col-auto">
          {dateFormat.formattedDate(caseData.createdAt)}
        </div>
        <div className="col-auto ms-auto">
          <div className="row">
            <div className="col">
              {/* <CaseEdit
              caseData={caseData}
              caseId={caseId}
              patientId={patientId}
              fetchCases={fetchCases}
              onCloseDropdown={() => setIsOpenDropdown(false)}
            /> */}
              <button
                className="btn btn-info"
                type="button"
                onClick={() => {
                  setIsOpenModalEdit(true);
                }}
              >
                แก้ไข
              </button>

              <Modal
                title="แก้ไขประวัติการรักษา"
                open={isOpenModalEdit}
                onClose={() => setIsOpenModalEdit(false)}
              >
                <CaseEditForm
                  caseData={caseData}
                  caseId={caseId}
                  patientId={patientId}
                  onSuccess={() => setIsOpenModalEdit(false)}
                  fetchCases={fetchCases}
                />
              </Modal>
            </div>
            <div className="col">
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => {
                  setIsOpenModalDelete(true);
                }}
              >
                ลบ
              </button>
              <Modal
                title="ยืนยันการลบข้อมูลการตรวจรักษา"
                open={isOpenModalDelete}
                onClose={() => setIsOpenModalDelete(false)}
              >
                <CaseDeleteForm
                  caseId={caseId}
                  patientId={patientId}
                  onSuccess={() => setIsOpenModalDelete(false)}
                  onClose={() => setIsOpenModalDelete(false)}
                  fetchCases={fetchCases}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="card-header">
    //   <div className="row align-items-center">
    //     <div className="col-auto">
    //       {dateFormat.formattedDate(caseData.createdAt)}
    //     </div>
    //     <div className="dropdown col-auto ms-auto" ref={dropdownEl}>
    //       <button
    //         className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
    //         onClick={() => setIsOpenDropdown((prev) => !prev)}
    //       >
    //         <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
    //       </button>
    //       <div
    //         className={`dropdown-menu end-0 mt-1${
    //           isOpenDropdown ? ' d-block' : ''
    //         }`}
    //       >
    //         {/* <CaseEdit
    //           caseData={caseData}
    //           caseId={caseId}
    //           patientId={patientId}
    //           fetchCases={fetchCases}
    //           onCloseDropdown={() => setIsOpenDropdown(false)}
    //         /> */}
    //         <div>
    //           <button
    //             className="dropdown-item"
    //             type="button"
    //             onClick={() => {
    //               setIsOpenDropdown(false);
    //               setIsOpenModal(true);
    //             }}
    //           >
    //             แก้ไข
    //           </button>

    //           <Modal
    //             title="แก้ไขประวัติการรักษา"
    //             open={isOpenModal}
    //             onClose={() => setIsOpenModal(false)}
    //           >
    //             <CaseEditForm
    //               caseData={caseData}
    //               caseId={caseId}
    //               patientId={patientId}
    //               onSuccess={() => setIsOpenModal(false)}
    //               fetchCases={fetchCases}
    //             />
    //           </Modal>
    //         </div>
    //         <button
    //           onClick={() => setIsOpenDropdown(false)}
    //           className="dropdown-item"
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CaseHeader;
