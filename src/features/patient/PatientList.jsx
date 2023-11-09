import React from 'react';
import Patient from './Patient';

function PatientList({ patients }) {
  return (
    <>
      {patients.map((item) => (
        <Patient key={item.id} patient={item} />
      ))}
    </>
  );
}

export default PatientList;
