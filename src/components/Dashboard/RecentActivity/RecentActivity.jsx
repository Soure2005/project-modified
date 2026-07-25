import styles from "./RecentActivity.module.css";
import { RecentActivityData } from "../../../Data/RecentActivityData";

const RecentActivity = () => {
  return (
    <div className={styles.recentActivity}>
      <div className={styles.activityHeader}>
        <h3>Recent Activity</h3>
        <button>View All</button>
      </div>

      {RecentActivityData.map((item, index) => {
        const Icon = item.icon;

        return (
          <div className={styles.activityItem} key={index}>
            <div className={styles.leftSide}>
              <Icon size={20} />

              <div>
                <h4>{item.title}</h4>
                <p>{item.type}</p>
              </div>
            </div>

            <h4>{item.amount}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivity;