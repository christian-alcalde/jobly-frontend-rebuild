import React, {useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';

import UserContext from "./userContext";
import './styles/NavBar.css'

const NavBar = ({onLogout}) => {
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('clicked!');
    onLogout(); // clear token and curUser for logout
    navigate('/');
  }

  return (
    <nav className="navbar-container navbar">
      <ul className="list-container">
        <li>
          <Link to="/">
            Jobly
          </Link>
        </li>
      </ul>
      {currentUser ?
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
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className='logout-button' onClick={handleLogout}>
            Logout {currentUser.username}
          </li>
        </ul>
        :
        <ul className="list-container float-right">
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      }
    </nav>
  )
}

export default NavBar;