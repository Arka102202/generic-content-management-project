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
        "mainWidth": "80%",
        "flexGap": "1rem",
        "flexDir": "row",
        "firstCol": "1fr",
        "spanVal": "2/4"
    }
    return (
        <nav className={`vars_e_html-${JSON.stringify(vars)} wd-100 topNav d-flex_sb_c py-2_imp`}>
            <div className='logo-box d-flex_c_c col-fixed-wd wd-7 wd-xxl-10 wd-l-10 wd-md-10 align_left-fix_20 left-20_imp wd-myname' >
                <img src={logo} alt="" className={`${className}`} onClick={() => setClassName(`wd-${getRandomInt(60, 100)}`)} />
            </div>
            <div className='navigation-box d-flex_fe_c_vFlexGap col-fixed-wd flex_dir-vFlexDir'>
                <Link to={"/about-us"}>About Us</Link>
                <Link to={"/blogs"}>Blog</Link>
                <Link to={"/events"}>Event</Link>
                <Link to={"/contact-us"}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default TopNavigationBar;