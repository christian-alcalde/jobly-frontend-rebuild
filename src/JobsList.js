import React, {useState, useEffect} from "react";
import JobCardList from "./JobCardList";

import JoblyApi from "./JoblyApi";
import SearchBar from "./SearchBar";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllJobs = async () => {
    const res = await JoblyApi.getJobs();
    setJobs(res);
  }

  const onSearch = async (formData) => {
    const res = await JoblyApi.getJobs({title: formData});
    setJobs(res);
  }

  useEffect(() => {
    getAllJobs();
    setIsLoading(false);
  }, []);

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <SearchBar search={onSearch}/>
      <JobCardList jobs={jobs}/>
    </div>
  )
}

export default JobsList;