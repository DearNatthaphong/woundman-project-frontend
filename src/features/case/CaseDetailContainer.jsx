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
    // fetchTreatmentsByCaseId(caseId);
  }, [caseId]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col col-sm-6">
          <div className="card border border-3 p-0">
            <CaseDetailHeader />
            <ul className="list-group list-group-flush p-0">
              <li className="list-group-item p-0">
                <PatientDetail caseData={caseData} />
              </li>
              <li className="list-group-item">
                <CaseDetail
                  caseData={caseData}
                  setCaseData={setCaseData}
                  caseId={caseId}
                />
              </li>
            </ul>
          </div>

          <div className="card  border border-3 p-0">
            <TreatmentContainer caseId={caseId} />
          </div>

          <div className="card  border border-3 p-0">
            <AppointmentContainer caseId={caseId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetailContainer;
