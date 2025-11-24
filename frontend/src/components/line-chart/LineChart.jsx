import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from "recharts";

const LinechartComponent = ({infoArr}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={infoArr}>
        <YAxis />
        <XAxis dataKey="name" />

        <Tooltip />
        <Legend />

        <Line
          dataKey="amount"
          fill="#3B82F6"
          dot={true}
          type="monotone"
        ></Line>

        <Area
          dataKey="amount"
          fill="#3b82f6"
          type="monotone"
          opacity={0.1}
        >
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LinechartComponent;
