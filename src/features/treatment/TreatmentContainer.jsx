import React, { useEffect, useState } from 'react';
import TreatmentList from './TreatmentList';
import * as treatmentService from '../../api/treatmentApi';
import Spinner from '../../components/ui/Spinner';

function TreatmentContainer() {
  const [treatments, setTreatments] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const res = await treatmentService.getTreatments();
        setTreatments(res.data.treatments);
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchTreatment();
  }, []);

  if (initialLoading) return <Spinner />;

  return (
    <div className="container-fluid mt-2">
      {treatments.length ? (
        <div className="row g-2 mt-1 justify-content-center">
          <div className="row row-cols-1 row-cols-sm-2 g-2 ">
            <TreatmentList treatments={treatments} />
          </div>
        </div>
      ) : (
        <div className="card mt-3">
          <div className="card-body">
            <p className="m-0">
              <i className="fa-regular fa-rectangle-xmark pe-3" />
              ไม่มีข้อมูล
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TreatmentContainer;
