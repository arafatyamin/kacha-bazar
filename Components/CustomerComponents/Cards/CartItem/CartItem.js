import Counter from "@/Components/CommonComponents/Counter";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ data }) => {
  const [count, setCount] = useState(1);
  return (
    <div
      key={data._id}
      className="flex py-3 px-4 shadow-sm rounded-md border-2 border-gray-100"
    >
      <img className="h-16 w-auto" src={data.photo}></img>
      <div className="flex items-center justify-between flex-grow">
        <div>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-gray-500 text-sm">Item Price: ${data.price}</p>
          <p className="text-lg font-bold text-gray-700">${data.price * count}</p>
        </div>
        <Counter
          value={count}
          increaseHandler={() => setCount(count + 1)}
          decreaseHandler={() => setCount(count - 1)}
        />
        <BiTrash className="text-red-500 text-xl" />
      </div>
    </div>
  );
};
export default CartItem;
