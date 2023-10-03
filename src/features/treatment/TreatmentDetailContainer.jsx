import React, { useEffect, useState } from 'react';
import TreatmentDetail from './TreatmentDetail';
import { useParams } from 'react-router-dom';
import * as treatmentService from '../../api/treatmentApi';

function TreatmentDetailContainer() {
  const { id } = useParams();
  const [treatment, setTreatment] = useState({});

  useEffect(() => {
    const fetchTreatment = async (id) => {
      try {
        const res = await treatmentService.getTreatmentById(id);
        setTreatment(res.data.treatment);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTreatment(id);
  }, [id]);

  return (
    <div>
      <TreatmentDetail treatment={treatment} />
    </div>
  );
}

export default TreatmentDetailContainer;
