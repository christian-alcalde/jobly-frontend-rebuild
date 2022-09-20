import React, {useContext} from "react";

import UserContext from "./userContext";

import './styles/JobCard.css';

const JobCard = ({job, handleApplication}) => {
  const currentUser = useContext(UserContext);

  return (
    <div className="jobcard-container container-sm">
      <h6>{job.title}</h6>
      <p>{job.companyName}</p>
      <p>Salary: ${new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(job.salary)}</p>
      <p>Equity: {job.equity || 0}</p>
      <div>
        {currentUser.applications.includes(job.id) ?
          <button onClick={() => handleApplication(job.id)}>Unapply</button> :
          <button onClick={() => handleApplication(job.id)}>Apply</button>
        }
      </div>
    </div>
  )
}

export default JobCard;