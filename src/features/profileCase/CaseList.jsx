import React from 'react';
import Case from './Case';

function CaseList({ cases }) {
  return (
    <div
      className="row row-cols-1 mt-1 mb-3 g-2"
      style={{
        height: '100vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {cases.map((item) => (
        <Case key={item.id} caseData={item} />
      ))}
    </div>
  );
}

export default CaseList;
