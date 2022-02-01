import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Header = () => (
  <>
    <header>
      <div className="logo">
        {' '}
        <img src={logo} alt="logo" className="mylogo" />
        {' '}
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink
          to="/rockets"
          activeclassname="active"
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          activeclassname="active"
        >
          Missions
        </NavLink>
        {' | '}
        <NavLink
          to="/profile"
          activeclassname="active"
        >
          {' '}
          My profile
        </NavLink>
      </nav>
    </header>
  </>
);

export default Header;
