import styles from "./Settings.module.css";
import SecurityCard from "./SecurityCard";
import AlertCard from "./AlertCard";
import InterfaceCard from "./InterfaceCard";
import SupportCard from "./SupportCard";


const Settings = () => {
    return (
        <div className={styles.settings}>
            <div className={styles.header}>
                <h1>System Configuration</h1>
                <p>
                    Manage your account, security and interface preferences.
                </p>
            </div>


            <div className={styles.topSection}>
                <SecurityCard />
                <AlertCard />
            </div>

            <div className={styles.bottomSection}>
                <InterfaceCard />
                <SupportCard />
            </div>
            <div className={styles.saveSection}>
                <div className={styles.saveText}>
                    <h3>Ready to apply your changes?</h3>
                    <p>Changes won't take effect until you save them.</p>
                </div>

                <button className={styles.saveButton}>
                    Save Configuration
                </button>
            </div>
        </div>
    );
};

export default Settings;