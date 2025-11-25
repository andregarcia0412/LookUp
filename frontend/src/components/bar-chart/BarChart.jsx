import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = ({ infoArr }) => {
  const sortedData = [...infoArr].sort((a,b) => b.amount - a.amount)

  const categories = sortedData.reduce((acc, item) => {
    if(!acc[item.category]){
      acc[item.category] = 0
    }

    acc[item.category] += Number(item.amount)
    
    return acc
  }, {})

  const chartData = Object.entries(categories).map(([category, total]) => {
    return {category, total}
  })

  console.log(chartData)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <YAxis />
        <XAxis dataKey="category"/>

        <Tooltip />
        <Legend />

        <Bar
          dataKey="total"
          fill="#3B82F6"
          radius={[10, 10, 10, 10]}
          barSize={100}
        ></Bar>

      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarChartComponent;
