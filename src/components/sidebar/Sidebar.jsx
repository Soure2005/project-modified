import React, { useState } from 'react'
import './Sidebar.css'

import { SidebarData } from '../../Data/SidebarData'
import { LogOut } from "lucide-react";
import { UserData } from "../../Data/UserData";
const Sidebar = () => {
    const [selected,setSelected]=useState(1)
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
                       <div className={selected===index?'menuItem active':'menuItem'}  onClick={()=>setSelected(index)} key={index}>
                       
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    )
                })}
            </div>

            <div className="logout"  onClick={() => alert("Logging out...")}>
                <LogOut />
                <span>Sign Out</span>
            </div>
        </div>

    )
}

export default Sidebar
