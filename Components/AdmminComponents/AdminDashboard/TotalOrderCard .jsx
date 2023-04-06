
function TotalOrderCard({order}) {
  const {time, price, color, FiLayers}=order;

  return (
    <div className=" rounded-md rounded-5 max-w-80 h-auto bg-cyan-600 p-6 " style={{backgroundColor:color}} >
      <FiLayers className="text-white text-center font-bold text-3xl mx-auto"></FiLayers>
      <div className="text-white text-center py-2 ">{time}</div>
      <div className="text-white text-center font-bold text-3xl">{price}</div>
    </div>
  )
}

export default TotalOrderCard