import React from 'react';
import logo from "../assets/image/logo.jpg"
import { Link } from "react-router-dom";

const TopNavigationBar = () => {
    return (
        <nav className='top-nav flex justify-content-space-between align-items-center'>
            <div className='logo-box col-fixed-wd wd-8 wd-md-15'>
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