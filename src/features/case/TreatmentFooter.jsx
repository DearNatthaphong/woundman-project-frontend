import React, { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import Modal from '../../components/ui/Modal';
import TreatmentCreateForm from './TreatmentCreateForm';

// import TreatmentDelete from './TreatmentDelete';
// import TreatmentEdit from './TreatmentEdit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function TreatmentFooter({
  treatment,
  caseId,
  updateTreatment,
  deleteTreatment
}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // const modalContentRef = useRef();
  const closeDropdown = useCallback(() => setIsOpenDropdown(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleEditClick = () => {
    // setIsOpenDropdown(false); // Close the dropdown
    setIsOpenModal(true); // Open the modal
    // setTimeout(() => {
    //   setIsOpenModal(true); // Open the modal after a certain delay
    // }, 1000);
  };

  return (
    ///////// 2 modals bootstrap js
    // <div className="card-footer">
    //   <div className="row align-items-center text-center">
    //     <div className="col-6">
    //       <TreatmentEdit
    //         treatment={treatment}
    //         caseId={caseId}
    //         updateTreatment={updateTreatment}
    //       />
    //     </div>
    //     <div className="col-6">
    //       <TreatmentDelete
    //         treatment={treatment}
    //         caseId={caseId}
    //         deleteTreatment={deleteTreatment}
    //       />
    //     </div>
    //   </div>
    // </div>
    /////// 2 modals in dropdown bootstrap js
    <div className="col-auto ms-auto">
      <div className="dropdown" ref={dropdownEl}>
        <button
          className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
          onClick={() => setIsOpenDropdown((prev) => !prev)}
        >
          <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
        </button>
        <ul
          className={`dropdown-menu end-0 mt-1${
            isOpenDropdown ? ' d-block' : ''
          }`}
        >
          <>
            <li>
              <button onClick={handleEditClick} className="dropdown-item">
                แก้ไข
              </button>
              <Modal
                title="สร้างการรักษา"
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
              >
                <TreatmentCreateForm
                // onSubmit={saveTreatment}
                // caseId={caseId}
                />
              </Modal>
            </li>
          </>
          <li>
            <button
              onClick={() => setIsOpenDropdown(false)}
              className="dropdown-item"
            >
              ลบ
            </button>
          </li>
        </ul>
      </div>
    </div>
    //////// 2 modals in dropdown bootstrap
    // <div className="card-footer">
    //   <div className="row align-items-center text-center">
    //     <div className="col-auto ms-auto">
    //       <div className="btn-group">
    //         <button
    //           type="button"
    //           // className=" dropdown-toggle"
    //           className=" btn btn-outline-secondary btn-sm rounded-circle"
    //           data-bs-toggle="dropdown"
    //           aria-expanded="false"
    //         >
    //           <i className="fas fa-ellipsis-h"></i>
    //         </button>
    //         <ul className="dropdown-menu dropdown-menu-end">
    //           <li>
    //             <button
    //               type="button"
    //               className="dropdown-item"
    //               data-bs-toggle="modal"
    //               data-bs-target="#edit"
    //             >
    //               <i className="fas fa-pen"></i>
    //               {` แก้ไข`}
    //             </button>
    //             <div
    //               className="modal fade"
    //               id="edit"
    //               tabindex="-1"
    //               aria-labelledby="edit"
    //               aria-hidden="true"
    //             >
    //               <div className="modal-dialog">
    //                 <div className="modal-content">
    //                   <div className="modal-header">
    //                     <h1 className="modal-title fs-5" id="edit">
    //                       Modal title
    //                     </h1>
    //                     <button
    //                       type="button"
    //                       className="btn-close"
    //                       data-bs-dismiss="modal"
    //                       aria-label="Close"
    //                     ></button>
    //                   </div>
    //                   <div className="modal-body">...</div>
    //                   <div className="modal-footer">
    //                     <button
    //                       type="button"
    //                       className="btn btn-secondary"
    //                       data-bs-dismiss="modal"
    //                     >
    //                       Close
    //                     </button>
    //                     <button type="button" className="btn btn-primary">
    //                       Save changes
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //           <li>
    //             <button className="dropdown-item">
    //               <i className="far fa-trash-alt"></i>
    //               {` ลบ`}
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default TreatmentFooter;
