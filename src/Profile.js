import React, {useState, useContext, useEffect} from "react";

import Alert from "./Alert";

import UserContext from "./userContext";
import AlertContext from "./alertContext";

const Profile = ({editProfile}) => {
  const currentUser = useContext(UserContext);
  const alertContainer = useContext(AlertContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editProfile(formData);
  }

  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currentData => {
      currentData[fieldName] = value;
      return {...currentData};
    })
  }

  return (
    <div className="container-sm">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className='form-control' type='text' value={currentUser.username} id='username' name='username' disabled/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input className='form-control' type='text' value={formData.firstName} id='firstName' name='firstName' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input className='form-control' type='text' value={formData.lastName} id='lastName' name='lastName' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className='form-control' type='email' value={formData.email} id='email' name='email' onChange={handleChange}/>
        </div>
        {alertContainer ?
          alertContainer.messages.map(msg =>
            <Alert key={msg} message={msg} error={alertContainer.isError}/>)
          : <></>
        }
        <button>Save Changes</button>
      </form>
    </div>
  )

}

export default Profile;