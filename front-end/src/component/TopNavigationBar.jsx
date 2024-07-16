import React from 'react';
import logo from "../assets/image/logo.jpg"
import { Link } from "react-router-dom";

const TopNavigationBar = () => {
    return (
        <nav className='top-nav flex justify-content-space-between align-items-center py-2'>
            <div className='logo-box col-fixed-wd wd-7 wd-md-10'>
                <img src={logo} alt="" className='wd-100' />
            </div>
            <div className='navigation-box flex justify-content-end align-items-center gap-1 col-fixed-wd'>
                <Link to={"/about-us"}>About Us</Link>
                <Link to={"/blogs"}>Blog</Link>
                <Link to={"/events"}>Event</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default TopNavigationBar;