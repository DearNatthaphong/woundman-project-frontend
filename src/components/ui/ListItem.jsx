import React from 'react';

function ListItem({ icon, text }) {
  return (
    <li className="list-group-item">
      <div className="row g-3 align-items-center w-100">
        <div className="col-auto">
          <i className={icon} style={{ fontSize: '14px' }} />
        </div>
        <div className="col-auto ">
          <p className="text-start mb-0">{text}</p>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
