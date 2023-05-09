import React from 'react';
import './Footer.css'
import img from "../../../public/icons/fb (1).png"
import img2 from "../../../public/icons/twitter (1).png"
import img3 from "../../../public/icons/youtube (1).png"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div>
                <h1>Assignment-Nine</h1>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div>
                    <img src={img} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;