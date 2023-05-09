import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../../public/photograpar-img-without-bg.png'
import { useLoaderData } from 'react-router-dom';
import HeaderFirst from '../HeaderFirst/HeaderFirst';
import Company from '../Company/Company';

const Home = () => {
    const headerFirst = useLoaderData()

    const [companyData, setCompanyData] = useState([])
    useEffect(() => {
        fetch('companyData.json')
            .then(res => res.json())
            .then(data => setCompanyData(data))
    }, [])

    return (
        //{/* Home Second Header Part Start */}
        <div>
            <div className='second-header'>
                <div className='second-header-first'>
                    <h1>Adventure Travel <span>Photographer</span></h1>
                    <p>As an Adventure Travel Photographer, your job is to travel to some of the most beautiful and remote locations in the world to capture stunning images that inspire others to explore the world</p>
                    <button className='btn-get-start'>Get Started</button>
                </div>
                <div>
                    <img className='header-img' src={img} alt="" />
                </div>
            </div>

            {/* Home Second Header Part End */}

            {/* Home First Body Part Start */}

            <div className='home-body-part-header'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='header-first-flex'>
                {
                    headerFirst.map(first => <HeaderFirst
                        key={first.id}
                        first={first}
                    ></HeaderFirst>)
                }
            </div>

            {/* Home First Body Part End */}

            {/* Home Second Body Part Start */}

            <div className='home-second-body-part'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    companyData.map(company => <Company
                        key={company.id}
                        company={company}
                    ></Company>)
                }
            </div>

            {/* Home Second Body Part End */}
        </div>
    );
};

export default Home;