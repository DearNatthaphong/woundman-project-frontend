import React, { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';

function Modal({ children, open, onClose, title }) {
  // const modalEl = useRef(6); // { current: 6}
  // const modalEl = useRef(); // { current: undefined}
  // const obj = { current: undefined}
  // modalEl = document.getElementById('modal') // vanila js
  const modalEl = useRef(); // { current: <div className="modal fade" tabindex="-1"></div>}
  const [modal, setModal] = useState(null);

  // initial modal
  useEffect(() => {
    const modalObj = new BsModal(modalEl.current); // ถ้าไม่เก็บค่า จะกลายเป็น modalObj 2 ตัวที่หน้าตาเหมือนกัน
    // modalObj.show();
    setModal(modalObj);
  }, []);

  // open modal by bootstrap
  useEffect(() => {
    if (open) {
      modal?.show();
    } else {
      modal?.hide(); // ไม่ให้ error จาก render รอบแรก เพราะ ค่ายังเป็น null อยู่
    }
  }, [open, modal]);

  return (
    // <div className='modal-backdrop fade show'></div>
    // <div className='modal fade show d-block'></div>
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
      {/* // vanila js */}
      {/* <div className="modal fade" tabindex="-1" id="modal"> */}
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close invisible"></button>
            <h4 className="modal-title text-dark">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
