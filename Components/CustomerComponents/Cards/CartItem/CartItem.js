import Counter from "@/Components/CommonComponents/Counter";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "@/store/actions/cartAction";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    images,
    originalPrice,
    price,
    discount,
    count = 0,
    userQuantity,
  } = data;
  return (
    <div
      key={id}
      className="flex items-center py-3 px-4 shadow-sm rounded-md border-2 border-gray-100"
    >
      <span className=" bg-[#10b981] text-white w-6 h-6 flex items-center justify-center rounded-full">
        {userQuantity}
      </span>
      <div className="sm:w-1/4 w-1/3">
        <Image
          className="mx-auto my-auto"
          src={images[0]}
          alt={title}
          width="50"
          height="50"
        />
      </div>
      <div className="sm:flex items-center justify-between flex-grow pl-4 space-y-4">
        <div className="sm:w-2/3">
          <p className="sm:text-lg font-semibold">{title}</p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Item Price: $
            <span className="text-base font-semibold">{price}</span>{" "}
            <span className=" text-xs line-through text-gray-primary">
              {originalPrice}
            </span>
          </p>
          <p className="sm:text-lg font-bold text-gray-700 mt-1">
            Total = ${price * userQuantity}
          </p>
        </div>
        <div className="flex gap-2 items-center" style={{ marginTop: 0 }}>
          <Counter
            value={userQuantity}
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
