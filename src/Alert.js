import React from "react";
import './styles/Alert.css';

const Alert = ({message, error}) => {
  return (
    <>
    {error === true ?
        <div className="alert-container error mx-auto">
          {message}
        </div> :
        <div className="alert-container success mx-auto">
          {message}
        </div>
    }
    </>
  )
}

export default Alert;