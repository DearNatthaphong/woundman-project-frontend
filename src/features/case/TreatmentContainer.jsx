import React, { useEffect, useState } from 'react';
import TreatmentContainerHeader from './TreatmentContainerHeader';
import TreatmentCreate from './TreatmentCreate';
import TreatmentList from './TreatmentList';
// import { useLoading } from '../../contexts/LoadingContext';
import * as caseService from '../../api/caseApi';

function TreatmentContainer({ caseId }) {
  const [treatments, setTreatments] = useState([]);
  // const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        // startLoading();
        const res = await caseService.getTreatmentsByCaseId(caseId);
        setTreatments(res.data.treatments);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchTreatment();
  }, [caseId]);

  const updateTreatment = async (caseId, treatmentId, input) => {
    try {
      const res = await caseService.updateTreatmentByCaseId(
        caseId,
        treatmentId,
        input
      );
      // setTreatments([...treatments, res.data.updatedTreatment]);
      setTreatments((prevTreatments) =>
        prevTreatments.map((item) =>
          item.id === treatmentId ? res.data.updatedTreatment : item
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTreatment = async (caseId, treatmentId) => {
    await caseService.deleteTreatmentByCaseId(caseId, treatmentId);
    const fetchTreatment = async () => {
      const res = await caseService.getTreatmentsByCaseId(caseId);
      setTreatments(res.data.treatments);
    };

    fetchTreatment();
  };

  return (
    <div>
      <TreatmentContainerHeader />
      <ul className="list-group">
        <li className="list-group-item">
          <TreatmentCreate
            caseId={caseId}
            setTreatments={setTreatments}
            treatments={treatments}
          />
        </li>
        <li className="list-group-item">
          <TreatmentList
            treatments={treatments}
            caseId={caseId}
            updateTreatment={updateTreatment}
            deleteTreatment={deleteTreatment}
          />
        </li>
      </ul>
    </div>
  );
}

export default TreatmentContainer;
