import React, { useState } from 'react';
// import logo from "../../public/assets/image/logo.jpg"
import { Link } from "react-router-dom";

const TopNavigationBar = () => {

    const logo = process.env.PUBLIC_URL + '/assets/image/logo.jpg';

    function getRandomInt(min, max) {
        // Ensure the range is inclusive by adding 1 to the difference between max and min
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [className, setClassName] = useState("transform-rotate:p10deg wd-100%");
    const vars = {
        "mainWidth": "80%",
        "flexGap": "1rem",
        "flexDir": "row",
        "firstCol": "1fr",
        "spanVal": "2/4",
        "textGrad": "linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)35%,rgba(0,212,255,1)100%)",
        "bgImg": "url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg')"
    }
    return (
        <nav className={`vars_e_html::${JSON.stringify(vars)} wd-100% topNav py-2%_imp @import-https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap d-flex&justify:flexEnd&align:center p-2rem pos-relative`}>
            <div className='logo-box wd-7% wd-xxl-10% wd-l-10% wd-md-10% align_top-abs_20% top-100%_imp' >
                <img src={logo} alt="" className={`${className} filter-dropShadow:16px_16px_16px_blue&blur:.01px border_rad-10px_2%_3rem_.8vw`} onClick={() => setClassName(`wd-${getRandomInt(60, 100)}%`)} />
            </div>
            <input className='ring-wd:2px&clr:pink' type="range" min="0" max="360" step="1" onChange={(e) => setClassName(`transform-rotate:${e.target.value}deg wd-${e.target.value}%`)} />

            <div className='navigation-box d-flex&flexDir:row&justify:center&align:flexStart&gap:1rem flex_dir-vFlexDir navigation-box>a:[p-.5rem_2.5rem,wd-40]'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about-us"} className='border-clr:grape&wd:2px border_l_wd-4px p-.5rem_2.5rem wd-40% filter-invert:1&dropShadow:16px_16px_16px_blue bdFilter_invert-1 mix_blend-hardLight opacity-.5 bg_position-20%_30% border_rad-50% color-#fff letter_dir-right grid_auto_columns-1fr'>About Us</Link>
                <Link to={"/blogs"} className="text_grad-vTextGrad font-s:30px&weight:700 column-span:all&wd:10rem&fill:balance">Blog</Link>
                <Link to={"/events"} className='font_size-5rem font_weight-700 font_family-SUSE,sans#serif txt_stroke-2px_#000'>Event</Link>
                <Link to={"/contact-us"} className='grid_col-autoFill_10vw caret_color-red overscroll_behavior-contain txt_shadow-3px_2px_10px_#00000001'>Contact Us</Link>
            </div>
            All Categories

        </nav>


    );
};

export default TopNavigationBar;            