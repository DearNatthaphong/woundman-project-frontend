import React, { useRef, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS

function Modal({ children, open, onClose, title }) {
  const modalEl = useRef();

  // Initialize Bootstrap modal when the component mounts
  useEffect(() => {
    const modal = new window.bootstrap.Modal(modalEl.current); // Initialize Bootstrap modal
    modalEl.current.addEventListener('hidden.bs.modal', onClose); // Attach an event listener for modal close

    // Show or hide the modal based on the `open` prop
    if (open) {
      modal.show();
    } else {
      modal.hide();
    }

    return () => {
      modal.dispose(); // Clean up the modal when the component unmounts
    };
  }, [open, onClose]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      ref={modalEl}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h4 className="modal-title text-dark">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
