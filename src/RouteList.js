import {BrowserRouter, Route, Routes} from 'react-router-dom';

import JoblyAPi from './JoblyApi';
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Homepage from "./Homepage";
import NavBar from "./NavBar";

const RouteList = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/companies" element={<CompaniesList/>} />
          <Route path="/companies/:company" element={<CompanyDetail/>} />
          <Route path="/jobs" element={<JobsList/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default RouteList;