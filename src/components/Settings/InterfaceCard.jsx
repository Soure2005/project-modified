import styles from "./InterfaceCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const InterfaceCard = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.card}>

            <h2>👁 Interface</h2>

            <div className={styles.section}>

                <h4>DISPLAY</h4>
                <div className={styles.row}>
                    <span>Dark Mode</span>

                    <div className={styles.themeButtons}>
                        <button
                            className={!darkMode ? styles.activeTheme : ""}
                            onClick={() => darkMode && toggleTheme()}
                        >
                            Light
                        </button>

                        <button
                            className={darkMode ? styles.activeTheme : ""}
                            onClick={() => !darkMode && toggleTheme()}
                        >
                            Dark
                        </button>
                    </div>
                </div>

            </div>

            <div className={styles.section}>

                <h4>PRIMARY LANGUAGE</h4>

                <select className={styles.select}>
                    <option>English (Global)</option>
                    <option>Hindi</option>
                    <option>French</option>
                </select>

            </div>

            <div className={styles.section}>

                <h4>REFERENCE CURRENCY</h4>

                <select className={styles.select}>
                    <option>USD - United States Dollar</option>
                    <option>EUR - Euro</option>
                    <option>INR - Indian Rupee</option>
                </select>

            </div>

        </div>
    );
};

export default InterfaceCard;