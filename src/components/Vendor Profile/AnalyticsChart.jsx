import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const AnalyticsChart = ({ data }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" minHeight={300}>
        <LineChart
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#e72e77" }}
            stroke="#e72e77"
            style={{ fontSize: "14px" }}
          />
          <Tooltip
            contentStyle={{ outline: "none", border: "1px solid #e72e77" }}
          />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#e72e77"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#4A4A4A"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
