import React, { useEffect, useState } from 'react';
import CaseSearch from './CaseSearch';
import CaseList from './CaseList';
import * as caseService from '../../api/caseApi';

function CaseContainer() {
  const [casesData, setCasesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        // startLoading();
        getCases();
      } catch (err) {
        console.log(err);
      } finally {
        // stopLoading();
      }
    };

    fetchCases();
  }, []);

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

  return (
    <div>
      <CaseSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <CaseList cases={searchResults.length > 0 ? searchResults : casesData} />
    </div>
  );
}

export default CaseContainer;
