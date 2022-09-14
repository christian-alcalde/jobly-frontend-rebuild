import React from "react";
import {Link} from 'react-router-dom';

import './styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar-container navbar">
      <ul className="list-container">
        <li>
          <Link to="/">
            Jobly
          </Link>
        </li>
      </ul>
      <ul className="list-container float-right">
        <li>
          <Link to="/companies">
            Companies
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;