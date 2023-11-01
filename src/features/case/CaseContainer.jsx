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
          await fetchCasesWithoutTreatment();
        } else {
          await getCases();
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
    <div className="container-fluid">
      <CaseSearch
        searchTerm={searchTerm}
        handleSearchTerm={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        handleSearch={handleSearch}
        showCasesWithoutTreatment={showCasesWithoutTreatment}
        onToggle={() =>
          setShowCasesWithoutTreatment(!showCasesWithoutTreatment)
        }
      />
      <CaseList cases={searchResults.length > 0 ? searchResults : casesData} />
    </div>
  );
}

export default CaseContainer;
