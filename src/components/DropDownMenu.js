import React, { useState } from 'react';
import '../styles/DropDownMenu.css'

function DropdownMenu({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'opened' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {title}
      </button>
      <div className="dropdown-menu">
        <ul>{children}</ul>
      </div>
    </div>
  );
}

export default DropdownMenu;