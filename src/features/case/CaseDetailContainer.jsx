import React, { useEffect, useState } from 'react';
import CaseDetailHeader from './CaseDetailHeader';
import PatientDetail from './PatientDetail';
import AppointmentContainer from './AppointmentContainer';
import TreatmentContainer from './TreatmentContainer';
import CaseDetail from './CaseDetail';
import * as caseService from '../../api/caseApi';
import { useParams } from 'react-router-dom';

function CaseDetailContainer() {
  const { id: caseId } = useParams();
  const [caseData, setCaseData] = useState([]);

  const getCaseByID = async (caseId) => {
    const res = await caseService.getCaseById(caseId);
    // console.log('res.data : ', res.data);
    // console.log('caseId : ', caseId);
    setCaseData(res.data.caseData);
  };

  useEffect(() => {
    const fetchCaseById = async (caseId) => {
      try {
        // startLoading();
        getCaseByID(caseId);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCaseById(caseId);
  }, [caseId]);

  const updateCase = async (caseId, updatedData) => {
    const res = await caseService.updateCaseByCaseId(caseId, updatedData);
    const newCases = caseData.map((item) =>
      item.id === res.data.updatedCase.id ? res.data.updatedCase : item
    );
    setCaseData(newCases);
  };

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-12 col-sm-6">
          <h4 className="fw-bold mb-3 text-center">ข้อมูลการรักษา</h4>
          {/* <CaseDetailHeader /> */}
          <div className="card mb-3">
            <div className="card-body pb-0">
              <PatientDetail caseData={caseData} updateCase={updateCase} />
            </div>
          </div>
          <CaseDetail
            caseData={caseData}
            setCaseData={setCaseData}
            caseId={caseId}
          />
          <AppointmentContainer caseId={caseId} />
          {/* </div> */}
        </div>
        <div className="col-12 col-sm-6">
          <TreatmentContainer caseId={caseId} />
          {/* <div className="card  border border-3 p-0">
            <AppointmentContainer caseId={caseId} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CaseDetailContainer;
