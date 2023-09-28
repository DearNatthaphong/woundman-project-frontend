import React from 'react';
import Case from './Case';

function CaseList({ cases }) {
  if (!cases) {
    return null; // Or some other fallback UI or loading indicator
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-2 mx-3">
      {cases.map((item) => (
        <Case key={item.id} case={item} />
      ))}
    </div>
  );
}

export default CaseList;
