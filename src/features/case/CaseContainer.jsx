import React, { useEffect, useState } from 'react';
import CaseSearch from './CaseSearch';
import CaseList from './CaseList';
import * as caseService from '../../api/caseApi';
import CaseFilter from './CaseFilter';
import Spinner from '../../components/ui/Spinner';

function CaseContainer() {
  const [casesData, setCasesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCasesWithoutTreatment, setShowCasesWithoutTreatment] =
    useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        let res;
        if (showCasesWithoutTreatment) {
          res = await caseService.getCasesWithoutTreatment();
          console.log(res.data);
        } else {
          res = await caseService.getCases();
        }
        setCasesData(res.data.casesData);
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
        setInitialLoading(false);
      }
    };

    fetchCases();
  }, [showCasesWithoutTreatment]);

  const handleSearch = async () => {
    try {
      const res = await caseService.getCasesBySearchTerm(searchTerm);
      if (res.data.casesData.length) {
        setCasesData(res.data.casesData);
      } else {
        setCasesData([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (initialLoading) return <Spinner />;

  return (
    <div className="container-fluid mt-2">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6">
          <CaseSearch
            searchTerm={searchTerm}
            handleSearchTerm={(newSearchTerm) => setSearchTerm(newSearchTerm)}
            handleSearch={handleSearch}
          />
        </div>
        <CaseFilter
          showCasesWithoutTreatment={showCasesWithoutTreatment}
          onToggle={() =>
            setShowCasesWithoutTreatment(!showCasesWithoutTreatment)
          }
        />
      </div>
      {casesData.length ? (
        <div className="row mt-2 row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          <CaseList casesData={casesData} />
        </div>
      ) : (
        <div className="card mt-3">
          <div className="card-body">
            <p className="m-0">
              <i className="fa-solid fa-magnifying-glass pe-3" />
              ไม่พบข้อมูล
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseContainer;
