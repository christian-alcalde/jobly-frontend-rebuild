import {Navigate, Route, Routes} from 'react-router-dom';

import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Homepage from "./Homepage";
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const RouteList = ({login, signUp, editProfile, handleApplication}) => {

  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<LoginForm onLogin={login}/>} />
      <Route path="/signup" element={<SignUpForm onSignUp={signUp}/>} />
      {
        localStorage.getItem('token') ?
        <>
          <Route path="/companies" element={<CompaniesList/>} />
          <Route path="/companies/:company" element={<CompanyDetail handleApplication={handleApplication}/>} />
          <Route path="/jobs" element={<JobsList handleApplication={handleApplication}/>} />
          <Route path="/profile" element={<Profile editProfile={editProfile}/>} />
        </> :
        <>
          <Route path="*" element={<Navigate to='/login'/>} /> cannot access above links if not logged in
        </>
      }
       <Route path="*" element={<Navigate to='/'/>} /> handle 404 errors
    </Routes>
  )
}

export default RouteList;