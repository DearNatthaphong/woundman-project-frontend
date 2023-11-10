import React from 'react';
import Case from './Case';
import CaseCard from '../../components/ui/CaseCard';

function CaseList({ casesData }) {
  return (
    <>
      {casesData.map((item) => (
        <CaseCard key={item.id} caseData={item} isCasePage={true} />
      ))}
    </>
  );
}

export default CaseList;
