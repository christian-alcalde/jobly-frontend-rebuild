import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import Alert from "./Alert";
import AlertContext from "./alertContext";

const SignUpForm = ({onSignUp}) => {
  const alertContainer = useContext(AlertContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignUp(formData);
    if(!formData) navigate('/');
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className='form-control' type='text' id='username' name='username' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className='form-control' type='password' id='password' name='password' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input className='form-control' type='text' id='firstName' name='firstName' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input className='form-control' type='text' id='lastName' name='lastName' onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className='form-control' type='email' id='email' name='email' onChange={handleChange}/>
        </div>
        {alertContainer ?
          alertContainer.messages.map(msg =>
            <Alert key={msg} message={msg} error={alertContainer.isError}/>)
          : <></>
        }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;