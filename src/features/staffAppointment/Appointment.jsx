import React from 'react';
// import AppointmentEdit from './AppointmentEdit';
import * as dateService from '../../utils/dateFormat';
// import Avatar from '../../components/ui/Avatar';
import PatientCard from '../../components/ui/PatientCard';
import { Link } from 'react-router-dom';

function Appointment({
  appointment: {
    reason,
    appointmentDate,
    status,
    createdAt,
    caseId,
    Case: {
      Patient
      // chiefComplain
      // : { profileImage, titleName, firstName, lastName, dateOfBirth }
    }
  },
  updateAppointment
}) {
  return (
    <div className="col">
      <div className="card max-w-362">
        <PatientCard patient={Patient} />
        <div className="card mx-2 mt-0 mb-1">
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
        </div>
        {/* <div className="card-body pt-0">
          <div className="card">
            <Link
              className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              to={`/staff/cases/${caseId}`}
            >
              <p className="m-0">{`อาการ : ${chiefComplain}`}</p>
            </Link>
          </div>
        </div> */}
        <div className="card-footer">
          <div className="row">
            <div className="col-auto">
              <p className="card-text">
                <small className="text-body-secondary">
                  {dateService.timeSince(createdAt)}
                </small>
              </p>
            </div>
            {/* <AppointmentEdit
              id={id}
              reason={reason}
              appointmentDate={appointmentDate}
              status={status}
              updateAppointment={updateAppointment}
            /> */}
            <div className="col-auto pe-1 ms-auto">
              <Link
                to={`/staff/cases/${caseId}`}
                className="btn btn-outline-primary btn-sm "
              >
                การตรวจรักษา
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
