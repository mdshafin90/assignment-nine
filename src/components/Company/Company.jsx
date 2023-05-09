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
            <div>
                <p>{companyLocation}</p>
                <p>{salaryRange}</p>
            </div>
        </div>
    );
};

export default Company;