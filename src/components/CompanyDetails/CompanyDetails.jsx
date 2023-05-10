import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CompanyDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faLocationDot, faEnvelope, faClosedCaptioning, faPhone } from '@fortawesome/free-solid-svg-icons'

const CompanyDetails = () => {
    const companyData = useLoaderData()
    console.log(companyData)

    const { jobDescription, jobResponsibility, experience, educationalRequirements, salaryRange, name, phone, email, companyLocation } = companyData

    return (
        <div>
            <h1 className='job-details-header'>Job Details</h1>
            <div className='companyDetails'>
                <div className='companyDetails-first'>
                    <p>
                        <span className='job-description'>Job Description:</span>
                        <span className='job-description-dynamic'>{jobDescription}</span>
                    </p>
                    <p>
                        <span className='jop-res'>Job Responsibility:</span>
                        <span className='job-res-dynamic'>{jobResponsibility}</span>
                    </p>
                    <p>
                        <span className='education-requirment'>Educational Requirements:</span>
                        <p className='education-requirment-dynamic'>{educationalRequirements}</p>
                    </p>
                    <p>
                        <span className='experience'>Experiences:</span>
                        <p className='experience-dynamic'>{experience}</p>
                    </p>
                </div>
                <div className='companyDetails-two'>

                    <p className='job-details'>Job Details</p>

                    <hr />

                    <p><span className='salary'>
                        <FontAwesomeIcon icon={faCircleDollarToSlot} /> Salary:</span>
                        <span className='salary-dynamic'>{salaryRange}</span>
                    </p>

                    <p>
                        <span className='jobTitle'><FontAwesomeIcon icon={faClosedCaptioning} /> Job Title:</span>
                        <span className='jobTitle-dynamic'>{name}</span>
                    </p>

                    <h2 className='contact-info'>Contact Information</h2>

                    <hr />

                    <p>
                        <span className='phone'><FontAwesomeIcon icon={faPhone} /> Phone:</span>
                        <span className='phone-dynamic'>{phone}</span>
                    </p>

                    <p>
                        <span className='email'>
                            <FontAwesomeIcon icon={faEnvelope} /> Email:</span>
                        <span className='email-dynamic'>{email}</span>
                    </p>

                    <p>
                        <span className='address'>
                            <FontAwesomeIcon icon={faLocationDot} /> Address:</span>
                        <span className='address-dynamic'>{companyLocation}</span></p>

                    <button className='btn-apply-now'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;