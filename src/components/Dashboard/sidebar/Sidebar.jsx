import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

import { SidebarData } from '../../../Data/SidebarData'
import { LogOut } from "lucide-react";
import { UserData } from "../../../Data/UserData";
const Sidebar = () => {

    return (
        <div className="Sidebar">

            <div className="profile">
                <img src={UserData.image} alt="Profile" />

                <div className="profileInfo">
                    <h4>{UserData.name}</h4>
                    <span>{UserData.role}</span>
                </div>
            </div>
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive ? "menuItem active" : "menuItem"
                            }
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </NavLink>
                    )
                })}
            </div>

            <div className="logout" onClick={() => alert("Logging out...")}>
                <LogOut />
                <span>Sign Out</span>
            </div>
        </div>

    )
}

export default Sidebar
