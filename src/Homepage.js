import React, {useContext} from "react";
import { Link } from "react-router-dom";

import Alert from "./Alert";

import UserContext from "./userContext";
import AlertContext from "./alertContext";
import './styles/Homepage.css';

const Homepage = () => {
  const currentUser = useContext(UserContext);
  const alertContainer = useContext(AlertContext);

  return (
    <>
      {alertContainer ?
          alertContainer.messages.map(msg =>
            <Alert key={msg} message={msg} error={alertContainer.isError}/>)
            : <></>
      }
      <div className='homepage-container'>
        <h1>Jobly</h1>
        <h2>All the jobs in one, convenient place.</h2>
        {
          !currentUser &&
          <div className="buttons-container">
            <Link to='/login'>
              <button>Log In</button>
            </Link>
            <Link to='signup'>
              <button>Sign Up</button>
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Homepage;