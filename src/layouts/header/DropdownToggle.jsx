import React from 'react';
import Avatar from '../../components/ui/Avatar';

function DropdownToggle({ onClick }) {
  return (
    <div onClick={onClick} className="dropdown-toggle">
      <Avatar src="https://github.com/mdo.png" size="40" />
    </div>
  );
}

export default DropdownToggle;
