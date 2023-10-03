import React, { useEffect, useState } from 'react';
import CaseSearch from './CaseSearch';
import CaseList from './CaseList';
import * as caseService from '../../api/caseApi';

function CaseContainer() {
  const [casesData, setCasesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showCasesWithoutTreatment, setShowCasesWithoutTreatment] =
    useState(false);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        if (showCasesWithoutTreatment) {
          fetchCasesWithoutTreatment();
        } else {
          getCases();
        }
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCases();
  }, [showCasesWithoutTreatment]);

  const handleSearch = async () => {
    try {
      const res = await caseService.getCasesBySearchTerm(searchTerm);
      setSearchResults(res.data.casesData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCases = async () => {
    const res = await caseService.getCases();
    setCasesData(res.data.casesData);
  };

  const fetchCasesWithoutTreatment = async () => {
    const res = await caseService.getCasesWithoutTreatment();
    setCasesData(res.data.cases);
  };

  return (
    <div>
      <div className="row m-3 justify-content-center">
        <div className="col-12 col-md-6">
          <CaseSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked={showCasesWithoutTreatment}
              onChange={() =>
                setShowCasesWithoutTreatment(!showCasesWithoutTreatment)
              }
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              การตรวจรักษาที่รอการรักษา
            </label>
          </div>
        </div>
      </div>
      <CaseList cases={searchResults.length > 0 ? searchResults : casesData} />
    </div>
  );
}

export default CaseContainer;
