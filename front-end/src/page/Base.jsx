import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';

const Base = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Base;