import React from 'react';

function ListItem({ icon, text }) {
  return (
    <li
      className="list-group-item"
      // style={{ display: 'flex', alignItems: 'center' }}
    >
      {/* <div className="d-flex">
        <i className={icon} style={{ fontSize: '24px' }} />
        <h5 className="mb-0 ms-3">{text}</h5>
      </div> */}
      <div className="row g-3 align-items-center w-100">
        <div className="col-auto">
          <i className={icon} style={{ fontSize: '24px' }} />
        </div>
        <div className="col-auto ">
          <h5 className="text-start mb-0">{text}</h5>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
