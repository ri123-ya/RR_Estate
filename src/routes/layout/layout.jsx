import React from 'react'
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
    return (
        <div className="Layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout
