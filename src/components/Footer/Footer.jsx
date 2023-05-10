import React from 'react';
import './Footer.css'
import img from "../../../public/icons/fb (1).png"
import img2 from "../../../public/icons/twitter (1).png"
import img3 from "../../../public/icons/youtube (1).png"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer-part-one'>
                <h1>Assignment-Nine</h1>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='footer-logo'>
                    <img src={img} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='footer-part-two'>
                <div className='company-footer'>
                    <h3>Company</h3>
                    <a href='#footer'>About us</a>
                    <a href='#footer'>Work</a>
                    <a href='#footer'>Latest News</a>
                    <a href='#footer'>Careers</a>
                </div>
                <div className='product-footer'>
                    <h3>Product</h3>
                    <a href='#footer'>Proto Type</a>
                    <a href='#footer'>Plans & Pricing</a>
                    <a href='#footer'>Customers</a>
                    <a href='#footer'>Integrations</a>
                </div>
                <div className='support-footer'>
                    <h3>Support</h3>
                    <a href='#footer'>Help Desk</a>
                    <a href='#footer'>Sells</a>
                    <a href='#footer'>Become a Partner</a>
                    <a href='#footer'>Developers</a>
                </div>
                <div className='contact-footer'>
                    <h3>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p> +1 777 - 978 - 5570</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;