import styles from "./QuickActions.module.css";
import { QuickActionsData } from "../../../Data/QuickActionsData";

const QuickActions = () => {
  return (
    <div className={styles.QuickActions}>
      <h2>Quick Actions</h2>

      <div className={styles.actions}>
        {QuickActionsData.map((action, index) => {
          const Icon = action.icon;

          return (
            <div className={styles.actionCard} key={index}>
              <Icon />
              <span>{action.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;