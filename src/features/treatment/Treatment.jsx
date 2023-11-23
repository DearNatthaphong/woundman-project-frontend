import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import * as dateService from '../../utils/dateFormat';
import Modal from '../../components/ui/Modal';
import CreatedBy from '../../components/ui/CreatedBy';

function Treatment({
  treatment: { position, diagnosis, treatment, createdAt, image, Staff }
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="col d-flex justify-content-center">
      <div className="card" style={{ width: '350px' }}>
        <div className="card-body py-2 mx-2">
          <div className="row">
            <div className="col-auto px-0">
              <span className="m-0">ตำแหน่งแผล :</span>
            </div>
            <div className="col-auto ps-1 pe-0">
              <p className="fw-bold m-0">{position}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto px-0">
              <span className="m-0">คำวินิจฉัย :</span>
            </div>
            <div className="col-auto ps-1 pe-0">
              <p className="fw-bold m-0">{diagnosis}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto px-0">
              <span className="m-0">วิธีการรักษา :</span>
            </div>
            <div className="col-auto ps-1 pe-0">
              <p className="fw-bold m-0">{treatment}</p>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item py-1">
            <CreatedBy
              titleName={Staff?.titleName}
              firstName={Staff?.firstName}
              lastName={Staff?.lastName}
              role={Staff?.role}
            />
          </li>
        </ul>

        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col-auto">{dateService.timeSince(createdAt)}</div>
            <div className="col-auto ms-auto">
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
                <img src={image} className="img-fluid" alt="treatment" />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treatment;
