import "./Performance.css";
import { PerformanceData } from "../../../Data/PerformanceData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Performance = () => {
  return (
    <div className="performance">

      <div className="performanceHeader">
        <h2>Performance Index</h2>

        <div className="buttons">
          <button>1D</button>
          <button>1W</button>
          <button>1M</button>
          <button>1Y</button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={PerformanceData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#d32f2f" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};
export default Performance;