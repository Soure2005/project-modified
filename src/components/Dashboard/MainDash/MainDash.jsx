import React from "react";
import styles from "./MainDash.module.css";

import Cards from "../Cards/Cards";
import QuickActions from "../QuickActions/QuickActions";
import Performance from "../Performance/Performance";
import Navbar from "../Navbar/Navbar";
import RecentActivity from "../RecentActivity/RecentActivity";
const MainDash = () => {
  return (
    <div className={styles.MainDash}>
      <Navbar />

      <div className={styles.overview}>
        <h1>Dashboard Overview</h1>
        <p>
          Welcome back, your assets are performing
          <span> +12.4%</span> today.
        </p>
      </div>
      <Cards />
      <QuickActions />
      <div className={styles.bottomSection}>
        <Performance />
        <RecentActivity />
      </div>
    </div>
  );
};
export default MainDash;