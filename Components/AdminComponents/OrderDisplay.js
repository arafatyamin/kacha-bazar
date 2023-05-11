const OrderDisplay = ({ data }) => {
  const { icon, title, result, bg } = data;
  return (
    <div className="flex gap-2 items-center border rounded-sm p-2 bg-white">
      <div
        className={`p-2 w-12 h-12 ${bg} flex justify-center items-center rounded-full`}
      >
        {icon}
      </div>
      <div className="p-2">
        <h5 className="text-sm mb-1">{title}</h5>
        <p className="font-medium text-xl">{result}</p>
      </div>
    </div>
  );
};

export default OrderDisplay;
