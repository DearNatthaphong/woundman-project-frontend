// import React, { useEffect, useState } from 'react';
import TreatmentContainerHeader from './TreatmentContainerHeader';
import TreatmentCreate from './TreatmentCreate';
import TreatmentList from './TreatmentList';
// import { useLoading } from '../../contexts/LoadingContext';

function TreatmentContainer({ caseId }) {
  // const [treatments, setTreatmets] = useState([]);
  // // const { startLoading, stopLoading } = useLoading();

  // useEffect(() => {
  //   const fetchTreatment = async () => {
  //     try {
  //       // startLoading();

  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       // stopLoading();
  //     }
  //   };
  //   fetchTreatment()
  // }, []);

  return (
    <div>
      <TreatmentContainerHeader />
      <ul className="list-group">
        <li className="list-group-item">
          <TreatmentCreate caseId={caseId} />
        </li>
        <li className="list-group-item">
          <TreatmentList />
        </li>
      </ul>
    </div>
  );
}

export default TreatmentContainer;
