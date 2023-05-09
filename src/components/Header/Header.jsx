import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='top-header-part'>
            <h1>Assignment-Nine</h1>
            <div className='top-header-link'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/job">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <button className='top-btn'>Start Applying</button>
        </div >
    );
};

export default Header;