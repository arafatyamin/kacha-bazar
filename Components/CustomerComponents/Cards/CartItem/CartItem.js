import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
import { addToCart, decreaseFromCart, removeFromCart } from "@/store/actions/cartAction";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const {id, title,images,originalPrice, price, discount, count } = data
  const dispatch = useDispatch()
  return (
    <div
      key={id}
      className="flex py-3 px-4 shadow-sm rounded-md border-2 border-gray-100"
    >
      <div className="sm:w-1/4 w-1/3">
        <img className="mx-auto my-auto" src={images[0]}></img>
      </div>
      <div className="sm:flex items-center justify-between flex-grow pl-4 space-y-4">
        <div className="sm:w-2/3">
          <p className="sm:text-lg font-semibold">{title}</p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Item Price: $
            <span className="text-base font-semibold">{price}</span>{" "}
            <span className=" text-xs line-through text-gray-primary">
              ${originalPrice}
            </span>
          </p>
          <p className="sm:text-lg font-bold text-gray-700 mt-1">
            Total = ${price * count}
          </p>
        </div>
        <div className="my-auto flex gap-2 items-center">
          <Counter
            value={count}
            increaseHandler={() => dispatch(addToCart(data))}
            decreaseHandler={() => dispatch(decreaseFromCart(data))}
          />
          <BiTrash
            className="text-red-500 text-xl cursor-pointer"
            onClick={() => dispatch(removeFromCart(data))}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
