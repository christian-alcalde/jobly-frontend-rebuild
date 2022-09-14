import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import JoblyApi from "./JoblyApi";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCompanies = async(handle) => {
    const res = await JoblyApi.getCompanies(handle);
    setCompanies(res);
  }

  const onSearch = async (formData) => {
    // name is the sql parameter needed. it takes in an object with key name.
    const res = await JoblyApi.getCompanies({name: formData});
    setCompanies(res);
  }

  useEffect(() => {
    getCompanies();
    setIsLoading(false);
  }, [])

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <SearchBar search={onSearch}/>
      {companies.map(company =>
        <Link key={company.handle} to={`/companies/${company.handle}`}>
          <CompanyCard company={company}/>
        </Link>
      )}
    </div>
  )
}

export default CompaniesList;