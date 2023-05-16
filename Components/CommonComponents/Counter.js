const Counter = ({ value, decreaseHandler, increaseHandler }) => {
  return (
    <div className="flex justify-between items-center bg-primary text-white font-bold px-3 py-1 rounded min-w-[90px]">
      <button
        onClick={decreaseHandler}
        className={`disabled:text-slate-300 px-2`}
        disabled={value <= 1}
      >
        -
      </button>
      <div>{value}</div>
      <button onClick={increaseHandler} className="px-2">
        +
      </button>
    </div>
  );
};

export default Counter;
