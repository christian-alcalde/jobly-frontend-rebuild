import React from "react";

import './styles/JobCard.css';

const JobCard = ({job}) => {
  return (
    <div className="jobcard-container container-sm">
      <h6>{job.title}</h6>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;