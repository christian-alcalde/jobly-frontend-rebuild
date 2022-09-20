import React from "react"

import JobCard from "./JobCard";

const JobCardList = ({jobs, handleApplication}) => {
  return (
    <div>
      {jobs.map(job => <JobCard key={job.id} job={job} handleApplication={handleApplication}/>)}
    </div>
  )
}

export default JobCardList;