import { Outlet } from 'react-router-dom'
import React from 'react';
import Navbar from "./Navbar/Navbar";
import './App.module.css';
const Layout = () => {
    return (
        <div>

            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout