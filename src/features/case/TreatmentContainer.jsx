import React, { useEffect, useState } from 'react';
// import TreatmentContainerHeader from './TreatmentToggleCreate';
// import TreatmentCreate from './TreatmentCreate';
import TreatmentList from './TreatmentList';
// import { useLoading } from '../../contexts/LoadingContext';
import * as caseService from '../../api/caseApi';
import TreatmentToggleCreate from './TreatmentToggleCreate';
import Spinner from '../../components/ui/Spinner';

function TreatmentContainer({ caseId }) {
  const [treatments, setTreatments] = useState([]);
  // const { startLoading, stopLoading } = useLoading();
  const [initialLoading, setInitialLoading] = useState(true);

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
        setInitialLoading(false);
      }
    };

    fetchTreatment();
  }, [caseId]);

  const createTreatment = async (caseId, input) => {
    const res = await caseService.creatTreatmentByCaseId(caseId, input);
    setTreatments([res.data.newTreatment, ...treatments]);
  };

  const updateTreatment = async (caseId, treatmentId, input) => {
    const res = await caseService.updateTreatmentByCaseId(
      caseId,
      treatmentId,
      input
    );
    const newTreatments = treatments.map((item) =>
      item.id === treatmentId ? res.data.updatedTreatment : item
    );
    setTreatments(newTreatments);
  };

  const deleteTreatment = async (caseId, treatmentId) => {
    await caseService.deleteTreatmentByCaseId(caseId, treatmentId);
    setTimeout(() => {
      const newTreatments = treatments.filter(
        (item) => item.id !== treatmentId
      );
      setTreatments(newTreatments);
    }, 100);
  };

  if (initialLoading) return <Spinner />;

  return (
    <>
      <TreatmentToggleCreate
        caseId={caseId}
        createTreatment={createTreatment}
      />
      <TreatmentList
        treatments={treatments}
        caseId={caseId}
        updateTreatment={updateTreatment}
        deleteTreatment={deleteTreatment}
      />
    </>
  );
}

export default TreatmentContainer;
