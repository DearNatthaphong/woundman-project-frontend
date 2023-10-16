import React from 'react';

function ListItem({ icon, text }) {
  return (
    <li
      className="list-group-item"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <div className="row align-items-center w-100">
        <div className="col-3 text-end">
          <i className={icon} style={{ fontSize: '24px' }} />
        </div>
        <div className="col-9 ">
          <h5 className="text-start mb-0">{text}</h5>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
