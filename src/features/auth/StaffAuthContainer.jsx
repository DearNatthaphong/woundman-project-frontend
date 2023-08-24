import React from 'react';
import StaffAuthForm from './StaffAuthForm';

function StaffAuthContainer() {
  return (
    <div className="container-fluid bg-secondary-subtle py-5">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-success">WOUND MAN</h1>
            <h2 className="text-danger">สำหรับพนักงาน</h2>
          </div>
        </div>
        <div className="col my-5">
          <div className="row justify-content-md-start">
            <div className="col-12 col-sm-10 col-lg-8 pt-3">
              <StaffAuthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffAuthContainer;
