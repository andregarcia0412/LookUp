import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const LinechartComponent = ({ infoArr }) => {
  const sortedData = [...infoArr].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={sortedData}>
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis />
        <XAxis dataKey="name" />

        <Tooltip />
        <Legend />

        <Line dataKey="amount" fill="#3B82F6" dot={true} type="monotone"></Line>

        <Area
          dataKey="amount"
          fill="url(#blueGradient)"
          type="monotone"
          opacity={0.15}
        ></Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LinechartComponent;
