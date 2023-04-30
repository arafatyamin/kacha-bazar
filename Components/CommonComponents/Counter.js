
const Counter = ({value, decreaseHandler, increaseHandler}) => {
  return (
    <div className="flex justify-around items-center bg-primary text-white font-bold px-3 py-1 rounded min-w-[90px]">
      <button onClick={decreaseHandler} className={`cursor-pointer disabled:text-slate-300`} disabled={value < 2}>
        -
      </button>
      <div>{value}</div>
      <button onClick={increaseHandler} className="cursor-pointer">
        +
      </button>
    </div>
  );
}

export default Counter