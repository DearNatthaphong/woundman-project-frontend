import React from 'react';
import PatientAuthForm from './PatientAuthForm';

function PatientAuthContainer() {
  return (
    <div className="container-fluid py-5">
      <div className="row row-cols-1 row-cols-md-2 align-items-center">
        <div className="col mt-3 ">
          <div className="text-center">
            <h1 className="display-2 fw-bold text-success pt-3">WOUND MAN</h1>
          </div>
        </div>
        <div className="col my-5">
          <div className="row justify-content-md-start">
            <div className="col-12 col-md-10 col-lg-8 pt-3">
              <PatientAuthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientAuthContainer;
