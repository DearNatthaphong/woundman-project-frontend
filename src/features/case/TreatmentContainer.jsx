import React, { useEffect, useState } from 'react';
// import TreatmentContainerHeader from './TreatmentToggleCreate';
// import TreatmentCreate from './TreatmentCreate';
import TreatmentList from './TreatmentList';
import { useLoading } from '../../contexts/LoadingContext';
import * as caseService from '../../api/caseApi';
import TreatmentToggleCreate from './TreatmentToggleCreate';

function TreatmentContainer({ caseId }) {
  const [treatments, setTreatments] = useState([]);
  const { startLoading, stopLoading } = useLoading();

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

  const createTreatment = async (caseId, input) => {
    try {
      startLoading();
      const res = await caseService.creatTreatmentByCaseId(caseId, input);
      setTreatments([res.data.newTreatment, ...treatments]);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

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
    <>
      <TreatmentToggleCreate
        caseId={caseId}
        createTreatment={createTreatment}
      />
      {/* <TreatmentCreate
        caseId={caseId}
        setTreatments={setTreatments}
        treatments={treatments}
      /> */}
      <TreatmentList
        treatments={treatments}
        caseId={caseId}
        updateTreatment={updateTreatment}
        deleteTreatment={deleteTreatment}
      />
      {/* <ul className="list-group">
        <li className="list-group-item">
        </li>
        <li className="list-group-item">
        </li>
      </ul> */}
    </>
  );
}

export default TreatmentContainer;
