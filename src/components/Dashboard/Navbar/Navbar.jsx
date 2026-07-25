import styles from "./Navbar.module.css";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import userImage from "../../../imgs/img1.png";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.navbar}>
      <div className={styles.searchBox}>
        <Search />
        <input
          type="text"
          placeholder="Search assets, transactions, markets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.navRight}>
        <Bell
          size={22}
          className={styles.bell}
          onClick={() => alert("No new notifications")}
        />

        <div className={styles.userInfo}>
          <div>
            <h4>A. Crimson</h4>
            <p>Verified</p>
          </div>

          <img src={userImage} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;