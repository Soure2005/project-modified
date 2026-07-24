import "./QuickActions.css";
import { QuickActionsData } from "../../../Data/QuickActionsData";

const QuickActions = () => {
  return (
    <div className="QuickActions">
      <h2>Quick Actions</h2>

      <div className="actions">
        {QuickActionsData.map((action, index) => {
          const Icon = action.icon;

          return (
            <div className="actionCard" key={index}>
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