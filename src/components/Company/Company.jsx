import React from 'react';
import './Company.css'

const Company = ({ company }) => {
    const { companyName, name, id, companyLogo, companyLocation, salaryRange } = company
    console.log(company)
    return (
        <div className='company-info'>
            <img src={companyLogo} alt="" />
            <h2>{name}</h2>
            <h4>{companyName}</h4>
            <p>{companyLocation}</p>
        </div>
    );
};

export default Company;