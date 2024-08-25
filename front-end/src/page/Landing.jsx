// import React, { useEffect } from 'react';

import { useState } from "react";

const Landing = () => {
    const [orders, setOrder] = useState([2, 1, 3])

    const onClick = () => {

        setOrder(() => {
            const newOrder = [];
            newOrder.push(getRandomInt(1, 10));
            newOrder.push(getRandomInt(1, 10));
            newOrder.push(getRandomInt(1, 10));

            return [...newOrder];
        });
    }


    return (
        <>
            <div className="wd-90 wd-l-80">
                This is landing page
            </div>

            <div className='wd-vMainWidth m-auto'>
                <div className={`wd-l-80 d-grid_c_c grid-col_vFirstCol_30rem_50`} onClick={onClick}>
                    <div className={`order-${orders[0]} grid-col_span_vSpanVal`}>arka</div>
                    <div className={`order-${orders[1]}`}>Buiiii</div>
                    <div className={`order-${orders[2]}`}>Choto buiii</div>
                </div>
            </div>
        </>
    );
};

export default Landing;

function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}