
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

// const data = [
//   {
//     name: "Sunday",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Monday",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Tuesday",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Wednesday",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Thursday",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Friday",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
// ];

// const data = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "May", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
// ];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data2 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

// Updated codes
const DynamicPieChart = dynamic(
  () => import("recharts").then((mod) => mod.PieChart),
  {
    ssr: false,
  }
);

export default function Charts() {
  return (
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    //     <div className=" border bg-white rounded-lg py-6 ">
    //       <div className="p-8">
    //         <p className="font-bold">Weekly Sales</p>
    //       </div>
    //       <LineChart
    //         // style={{ maxWidth:'500px' }}
    //         width={450}
    //         height={300}
    //         data={data ? data : null}
    //         margin={{
    //           top: 5,
    //           right: 30,
    //           left: 20,
    //           bottom: 5,
    //         }}
    //       >
    //         <CartesianGrid strokeDasharray="3 3" />
    //         <XAxis dataKey="name" />
    //         <YAxis />
    //         <Tooltip />
    //         <Legend />
    //         <Line
    //           type="monotone"
    //           dataKey="pv"
    //           stroke="#8884d8"
    //           activeDot={{ r: 8 }}
    //         />
    //         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    //       </LineChart>
    //     </div>
    //     <div className=" border bg-white rounded-lg py-6 ">
    //       <div className="p-8">
    //         <p className="font-bold">Weekly Sales</p>
    //       </div>
    //       <div>
    //         <PieChart width={400} height={300}>
    //           <Pie
    //             //   data={data2}
    //             cx="50%"
    //             cy="50%"
    //             labelLine={false}
    //             label={renderCustomizedLabel}
    //             outerRadius={80}
    //             fill="#8884d8"
    //             dataKey="value"
    //           >
    //             {data2.map((entry, index) => (
    //               <Cell
    //                 key={`cell-${index}`}
    //                 fill={COLORS[index % COLORS.length]}
    //               />
    //             ))}
    //           </Pie>
    //         </PieChart>
    //       </div>
    //     </div>
    //   </div>

    <div>
      <DynamicPieChart width={400} height={400}>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </DynamicPieChart>
      <LineChart width={600} height={300} data={data}>
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
    </div>
  );
}
