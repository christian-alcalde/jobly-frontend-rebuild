import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import RouteList from "./RouteList";
import JoblyApi from "./JoblyApi";
import NavBar from "./NavBar";
import jwt from 'jwt-decode';
import UserContext from "./userContext";
import AlertContext from "./alertContext";

const initialAlert = {messages: [], isError: false};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState(null);
  const [alert, setAlert] = useState(initialAlert);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getUser = async () => {
        JoblyApi.token = token;
        const decodedToken = jwt(token);
        const res = await JoblyApi.getUser(decodedToken.username);
        setCurrentUser(res);
        console.log('current',res)
      }
      setIsLoading(false);
      getUser();
    } catch(e) {
      console.log(e);
    }
  }, [isLoading, token]);

  // clears alert messages after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setAlert(initialAlert), 3000);
    return () => clearTimeout(timer); // needed for clean up
  }, [alert])

  const login = async (formData) => {
    try {
      const res = await JoblyApi.getToken(formData);
      localStorage.setItem('token', res);
      setToken(localStorage.getItem('token'));
      setAlert({messages: ["Login successful."], isError: false});
      navigate('/companies');
    } catch(e) {
      setAlert({messages: e, isError: true});
    }
  }

  const signUp = async (formData) => {
    try {
      const res = await JoblyApi.register(formData);
      localStorage.setItem('token', res);
      setToken(localStorage.getItem('token'))
      setAlert({messages: ['Successful signup.'], isError: false});
      navigate('/companies');
    } catch(e) {
      setAlert({messages: e, isError: true});
    }
  }

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setCurrentUser(null);
    setAlert({messages: ['Successful logout.'], isError: false});
    navigate('/')
  }

  const editProfile = async (formData) => {
    try {
      const res = await JoblyApi.editUser(currentUser.username, formData);
      setCurrentUser(res);
      setAlert({messages: ['Successfully updated profile.'], isError: false})
    } catch(e) {
      setAlert({messages: e, isError: true});
    }
  }

  const handleApplication = async (id) => {
    if(currentUser.applications.includes(id)) {
      try {
        const res = await JoblyApi.unapply(currentUser.username, id);
        const updatedUser = await JoblyApi.getUser(currentUser.username);
        setCurrentUser(updatedUser);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const res = await JoblyApi.apply(currentUser.username, id);
        const updatedUser = await JoblyApi.getUser(currentUser.username);
        setCurrentUser(updatedUser);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <AlertContext.Provider value={alert}>
            {!isLoading &&
              <>
                <NavBar onLogout={logout}/>
                <RouteList login={login} signUp={signUp} editProfile={editProfile} handleApplication={handleApplication}/>
              </>
            }
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
