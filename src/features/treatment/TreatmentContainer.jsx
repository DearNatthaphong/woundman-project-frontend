import React, { useEffect, useState } from 'react';
import TreatmentList from './TreatmentList';
import * as treatmentService from '../../api/treatmentApi';

function TreatmentContainer() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const res = await treatmentService.getTreatments();
        setTreatments(res.data.treatments);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTreatment();
  }, []);

  return <TreatmentList treatments={treatments} />;
}

export default TreatmentContainer;
