import React from 'react'
import './MainDash.css'
import Cards from "../Cards/Cards";
import QuickActions from "../QuickActions/QuickActions";
import Performance from "../Performance/Performance"
import Navbar from "../Navbar/Navbar";
import RecentActivity from "../RecentActivity/RecentActivity";
const MainDash = () => {
    return (
        <div className="MainDash">
            <Navbar />
            <div className="overview">
                <h1>Dashboard Overview</h1>
                <p>
                    Welcome back, your assets are performing
                    <span> +12.4%</span> today.
                </p>
            </div>
            <Cards />
            <QuickActions />
            <div className="bottomSection">
                <Performance />
                <RecentActivity />
            </div>
        </div>
    )
}

export default MainDash
