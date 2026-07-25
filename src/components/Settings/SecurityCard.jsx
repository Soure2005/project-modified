import styles from "./SecurityCard.module.css";

const SecurityCard = () => {
    return (
        <div className={styles.card}>

            {/* Header */}

            <div className={styles.header}>
                <h2>🛡 Security & Authorization</h2>

                <span className={styles.badge}>
                    HIGH PROTECTION
                </span>
            </div>

            {/* Top Options */}

            <div className={styles.topOptions}>

                <div className={styles.optionCard}>
                    <div>
                        <h4>Biometric Login</h4>
                        <p>Use FaceID or TouchID</p>
                    </div>

                    <input type="checkbox" defaultChecked />
                </div>

                <div className={styles.optionCard}>
                    <div>
                        <h4>Two-Factor (2FA)</h4>
                        <p>Authenticator App or SMS</p>
                    </div>

                    <input type="checkbox" />
                </div>

            </div>

            {/* Password */}

            <div className={styles.passwordSection}>
                <div>
                    <h4>Master Password</h4>
                    <p>Last updated 12 days ago</p>
                </div>

                <button className={styles.passwordButton}>
                    CHANGE PASSWORD
                </button>
            </div>

            {/* Sessions */}

            <div className={styles.sessions}>
                <div>
                    <h4>Active Sessions</h4>
                    <p>3 devices currently authorized</p>
                </div>

                <span className={styles.sessionsLink}>
                    VIEW ALL SESSIONS
                </span>
            </div>

        </div>
    );
};

export default SecurityCard;