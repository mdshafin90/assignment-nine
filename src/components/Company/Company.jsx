import React from 'react';
import './Company.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Company = ({ company }) => {
    const { companyName, name, id, companyLogo, companyLocation, salaryRange } = company
    console.log(company)
    return (
        <div className='company-info'>
            <img src={companyLogo} alt="" />
            <h2>{name}</h2>
            <h4>{companyName}</h4>
            <button className='btn-remote'>Remote</button>
            <button className='btn-fulltime'>Full Time</button>
            <div className='company-location-salary'>
                <p><FontAwesomeIcon icon={faLocationDot} />  {companyLocation}</p>
                <p className='company-salary'><FontAwesomeIcon icon={faCircleDollarToSlot} />  {salaryRange}</p>
            </div>
            <button className='btn-view-details'>View Details</button>
        </div>
    );
};

export default Company;