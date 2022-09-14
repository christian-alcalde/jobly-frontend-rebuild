import React from "react";

import './styles/CompanyCard.css'

const CompanyCard = ({company}) => {
  return (
      <div className="container-sm companycard-container">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      </div>
  )
}

export default CompanyCard;