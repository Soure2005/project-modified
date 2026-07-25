import styles from "./SupportCard.module.css";

const SupportCard = () => {
  return (
    <div className={styles.card}>
      <h2>🛟 Support & Legal</h2>

      <p className={styles.subtitle}>
        Help, privacy and legal information.
      </p>

      <div className={styles.option}>
        <div>
          <h4>Help Center</h4>
          <p>Browse FAQs and documentation.</p>
        </div>

        <button>OPEN</button>
      </div>

      <div className={styles.option}>
        <div>
          <h4>Privacy Policy</h4>
          <p>View how your data is protected.</p>
        </div>

        <button>VIEW</button>
      </div>

      <div className={styles.option}>
        <div>
          <h4>Terms & Conditions</h4>
          <p>Read the latest user agreement.</p>
        </div>

        <button>READ</button>
      </div>
    </div>
  );
};

export default SupportCard;