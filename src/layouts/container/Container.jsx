import React from 'react';

function Container({ children }) {
  //   return <div className="min-vh-100 tw-pt-14">Container</div>;
  return (
    <div className="" style={{ minHeight: '100vh', paddingTop: '60px' }}>
      {children}
    </div>
  );
}

export default Container;
