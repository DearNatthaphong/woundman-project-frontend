import React from 'react';
import * as dateService from '../../utils/dateFormat';
import CreatedBy from '../../components/ui/CreatedBy';

function AppointmentContent({ appointment }) {
  const { reason, appointmentDate, status, Staff } = appointment;
  return (
    <>
      <div className="ps-2">
        <div className="card-body py-1 ">
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
      </div>
      <hr className="m-1" />
      <div className="ps-2 pb-2">
        {/* <div className="card-body"> */}
        <CreatedBy
          titleName={Staff?.titleName}
          firstName={Staff?.firstName}
          lastName={Staff?.lastName}
          role={Staff?.role}
        />
        {/* </div> */}
      </div>
    </>
  );
}

export default AppointmentContent;
