import React, {useState, useContext} from "react";
import Alert from "./Alert";
import AlertContext from "./alertContext";

const LoginForm = ({onLogin}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const alertContainer = useContext(AlertContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(formData);
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

export default LoginForm;