import styles from "./AlertCard.module.css";

const AlertCard = () => {
    return (
        <div className={styles.card}>

            <div className={styles.header}>
                <h2>🔔 Alert Protocols</h2>
            </div>

            <div className={styles.section}>

                <h4>MARKET EVENTS</h4>

                <label className={styles.option}>
                    <span>Price Volatility Alerts</span>
                    <input type="checkbox" defaultChecked />
                </label>

                <label className={styles.option}>
                    <span>Transaction Confirmation</span>
                    <input type="checkbox" defaultChecked />
                </label>

            </div>

            <div className={styles.section}>

                <h4>MARKETING & NEWS</h4>

                <label className={styles.option}>
                    <span>Market Briefings</span>
                    <input type="checkbox" />
                </label>

                <label className={styles.option}>
                    <span>Exclusive Offers</span>
                    <input type="checkbox" defaultChecked />
                </label>

            </div>

        </div>
    );
};

export default AlertCard;