import { FiLayers } from "react-icons/fi";

function TotalOrderCard({ data, sale }) {
  return (
    <div
      className=" rounded-md rounded-5 max-w-80 h-auto bg-cyan-600 p-6 "
      style={{ backgroundColor: data?.color }}
    >
      <FiLayers className="text-white text-center font-bold text-3xl mx-auto"></FiLayers>
      <div className="text-white text-center py-2 ">{data?.time}</div>
      <div className="text-white text-center font-bold text-3xl">${sale}</div>
    </div>
  );
}

export default TotalOrderCard;
