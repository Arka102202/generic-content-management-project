import React, { useState } from 'react';
import logo from "../assets/image/logo.jpg"
import { Link } from "react-router-dom";

const TopNavigationBar = () => {

    function getRandomInt(min, max) {
        // Ensure the range is inclusive by adding 1 to the difference between max and min
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [className, setClassName] = useState("wd-100");
    const vars = {
        something: 10
    }
    return (
        <nav className={`vars-${JSON.stringify(vars)} wd-100 top-nav flex justify-content-space-between align-items-center py-2`}>
            <div className='logo-box col-fixed-wd wd-7 wd-md-10'>
                <img src={logo} alt="" className="wd-80" onClick={() => setClassName(`wd-${getRandomInt(60, 100)}`)} />
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