import React from "react"

import JobCard from "./JobCard";

const JobCardList = ({jobs}) => {
  return (
    <div>
      {jobs.map(job => <JobCard key={job.id} job={job}/>)}
    </div>
  )
}

export default JobCardList;