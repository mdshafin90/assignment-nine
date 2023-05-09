import React from 'react';
import './HeaderFirst.css'

const HeaderFirst = ({ first }) => {
    console.log(first)
    const { image, jobName, jobQuantity, id } = first
    return (
        <div className='header-first'>
            <img src={image} alt="" />
            <h2>{jobName}</h2>
            <h5>{jobQuantity}</h5>
        </div>
    );
};

export default HeaderFirst;