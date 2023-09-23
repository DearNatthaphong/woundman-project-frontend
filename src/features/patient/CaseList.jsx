import React from 'react';
import Case from './Case';

function CaseList({ cases }) {
  if (!Array.isArray(cases)) {
    return <div>No cases available</div>;
  }
  return (
    <div>
      {cases.map((item) => (
        <Case key={item.id} case={item} />
      ))}
    </div>
  );
}

export default CaseList;
