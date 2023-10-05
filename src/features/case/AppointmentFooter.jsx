import React from 'react';
import AppointmentEdit from './AppointmentEdit';

function AppointmentFooter({ appointment, caseId, updateAppointment }) {
  return (
    <div className="card-footer">
      <div className="row align-items-center">
        <AppointmentEdit
          appointment={appointment}
          caseId={caseId}
          updateAppointment={updateAppointment}
        />
        <div className="col-6">
          <button
            className="btn btn-sm  btn-danger w-100"
            type="button"
            // onClick={() => {
            //   setIsOpenModalDelete(true);
            // }}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentFooter;
