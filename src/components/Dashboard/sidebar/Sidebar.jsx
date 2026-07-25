import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

import { SidebarData } from "../../../Data/SidebarData";
import { LogOut } from "lucide-react";
import { UserData } from "../../../Data/UserData";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.profile}>
        <img src={UserData.image} alt="Profile" />

        <div className={styles.profileInfo}>
          <h4>{UserData.name}</h4>
          <span>{UserData.role}</span>
        </div>
      </div>

      <div className={styles.menu}>
        {SidebarData.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? `${styles.menuItem} ${styles.active}`
                  : styles.menuItem
              } >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
      <div
        className={styles.logout}
        onClick={() => alert("Logging out...")}>
        <LogOut />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default Sidebar;