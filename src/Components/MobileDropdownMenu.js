import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileDropdownMenu = () => {
  // Add your mobile and tablet menu items here
  return (
    <div className="mobile-dropdown-menu">
      <NavLink to='/bollywood' className="mobile-menu-link">Bollywood</NavLink>
      <NavLink to='/technology' className="mobile-menu-link">Technology</NavLink>
      <NavLink to='/hollywood' className="mobile-menu-link">Hollywood</NavLink>
      <NavLink to='/fitness' className="mobile-menu-link">Fitness</NavLink>
      <NavLink to='/food' className="mobile-menu-link">Food</NavLink>
    </div>
  );
};

export default MobileDropdownMenu;
