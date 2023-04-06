import dynamic from "next/dynamic";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data2 = [
  {
    name: "Sun",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];



const data = [
  { name: "Potato", value: 400 },
  { name: "Onion", value: 300 },
  { name: "Banana", value: 300 },
  { name: "cucumber", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const DynamicPieChart = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  {
    ssr: false,
  }
);

export default function Charts() {
  return (


    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className=" border bg-white rounded-lg py-6 ">
        <div className="p-8">
          <p className="font-bold">Weekly Sales</p>
        </div>
        <ResponsiveContainer width="95%" height={400}>
        <LineChart data={data2}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
      </div>
      <div className=" border bg-white rounded-lg py-6 ">
      <div className="p-8">
          <p className="font-bold">Top selling products</p>
        </div>
        <ResponsiveContainer width="99%" height={400}>
        <DynamicPieChart>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </DynamicPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
