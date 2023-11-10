import React from 'react';
import * as dateService from '../../utils/dateFormat';

function AppointmentContent({ appointment }) {
  const { reason, appointmentDate, status, createdAt } = appointment;
  return (
    // <ul className="list-group list-group-flush">
    //   <li className="list-group-item">
    //     <div className="d-flex align-items-center">
    //     <p className="fw-bold mb-0">
    //       สาเหตุที่นัด :<small className="ms-2 fw-normal">{reason}</small>
    //     </p>
    //     </div>
    //   </li>
    //   <li className="list-group-item">
    //     <p className="fw-bold mb-0">
    //       วันที่นัด :
    //       <small className="ms-2 fw-normal">
    //         {dateService.formattedDate(appointmentDate)}
    //       </small>
    //     </p>
    //   </li>
    //   <li className="list-group-item">
    //     <p className="fw-bold mb-0">
    //       สถานะ : <small className="ms-2 fw-normal">{status}</small>
    //     </p>
    //   </li>
    //   <li className="list-group-item">
    //     <small className="text-body-secondary">
    //       {dateService.timeSince(createdAt)}
    //     </small>
    //   </li>
    // </ul>
    <div className="card-body py-1">
      <div className="row">
        <div className="col-auto px-0">
          <span className=" m-0">สาเหตุ :</span>
        </div>
        <div className="col-auto ps-1 pe-0">
          <p className="fw-bold m-0">{reason}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-auto px-0">
          <span className=" m-0">วันนัด :</span>
        </div>
        <div className="col-auto ps-1 pe-0">
          <p className="fw-bold m-0">
            {dateService.formattedDate(appointmentDate)}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-auto px-0">
          <span className=" m-0">สถานะ :</span>
        </div>
        <div className="col-auto ps-1 pe-0">
          <p className="fw-bold m-0">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default AppointmentContent;
