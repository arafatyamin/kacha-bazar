
const Counter = ({value, decreaseHandler, increaseHandler}) => {
  return (
    <div className="flex justify-around items-center bg-primary text-white font-bold px-3 py-1 rounded min-w-[90px]">
      <div onClick={decreaseHandler} className="cursor-pointer">
        -
      </div>
      <div>{value}</div>
      <div onClick={increaseHandler} className="cursor-pointer">
        +
      </div>
    </div>
  );
}

export default Counter