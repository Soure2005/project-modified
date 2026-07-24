import "./Navbar.css";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import userImage from "../../imgs/img1.png";
const Navbar = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="navbar">

            <div className="searchBox">
                <Search />
                <input
                    type="text"
                    placeholder="Search assets, transactions, markets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="navRight">

                <Bell size={22}
                    className="bell"
                    onClick={() => alert("No new notifications")} />

                        <div className="userInfo">

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