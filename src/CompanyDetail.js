import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom"

import JobCardList from "./JobCardList";
import JoblyApi from "./JoblyApi";

const CompanyDetail = ({handleApplication}) => {
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const getCompany = async () => {
      const res = await JoblyApi.getCompany(params.company);
      setCompany(res);
      setIsLoading(false);
    }
    getCompany();
  }, [])

  if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <div>
        <h4>{company.name}</h4>
        <p>{company.description}</p>
      </div>
      <JobCardList jobs={company.jobs} handleApplication={handleApplication}/>
    </div>
  )
}

export default CompanyDetail;