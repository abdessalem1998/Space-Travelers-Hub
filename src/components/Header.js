import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <div>
    <img src={logo} alt="logo" />
    <h2>Space Travelers Hub</h2>
    <NavLink to="/profile"> My profile </NavLink>
  </div>
);

export default Header;
