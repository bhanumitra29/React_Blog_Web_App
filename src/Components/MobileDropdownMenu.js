import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenuStyle = {
    display: isOpen ? 'block' : 'none',
  };
  return (
    <div className="mobile-menu">
    <button className="menu-toggle-button" onClick={toggleMenu}>
      Menu
    </button>
    <div className="mobile-dropdown-menu" style={dropdownMenuStyle}>
      <NavLink to='/' className="mobile-menu-link">Home</NavLink>
      <NavLink to='/bollywood' className="mobile-menu-link">Bollywood</NavLink>
      <NavLink to='/technology' className="mobile-menu-link">Technology</NavLink>
      <NavLink to='/hollywood' className="mobile-menu-link">Hollywood</NavLink>
      <NavLink to='/fitness' className="mobile-menu-link">Fitness</NavLink>
      <NavLink to='/food' className="mobile-menu-link">Food</NavLink>
    </div>
    </div>
  );
};

export default MobileDropdownMenu;
