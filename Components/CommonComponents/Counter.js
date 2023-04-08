
const Counter = ({value, decreaseHandler, increaseHandler}) => {
  return (
    <div className="bg-primary text-white font-bold px-3 py-1 space-x-2 rounded ">
      <span onClick={decreaseHandler} className="cursor-pointer">
        -
      </span>
      <span>{value}</span>
      <span onClick={increaseHandler} className="cursor-pointer">
        +
      </span>
    </div>
  );
}

export default Counter