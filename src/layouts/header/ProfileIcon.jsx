import React, { useCallback, useState } from 'react';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import { useClickOutside } from '../../hooks/useClickOutside';

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const dropdownEl = useClickOutside(closeDropdown);

  return (
    <div className="d-flex justify-content-md-end flex-1 px-2">
      <div className="nav-item dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setIsOpen((prev) => !prev)} />
        <DropdownMenu open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default ProfileIcon;
