import Counter from "@/Components/CommonComponents/Counter";
import { updateCart, removeCart } from "@/utils/cartItems";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";

const CartItem = ({ data, index }) => {
  const dispatch = useDispatch();
  const { id, title, images, originalPrice, price } = data?.product;

  const increaseItemQuantity = async () => {
    await updateCart({
      productId: id,
      quantity: data?.quantity + 1,
    });
    dispatch({
      type: "UPDATE_CART",
      quantity: data?.quantity + 1,
      index,
    });
  };
  const decreaseItemQuantity = async () => {
    try {
      await updateCart({
        productId: id,
        quantity: data?.quantity - 1,
      });
      dispatch({
        type: "UPDATE_CART",
        quantity: data?.quantity - 1,
        index,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async () => {
    await removeCart({
      productId: id,
    });
    dispatch({
      type: "REMOVE_CART",
      index,
    });
  };

  return (
    <div
      key={id}
      className="flex items-center py-3 px-4 shadow-sm rounded-md border-2 border-gray-100"
    >
      <span className=" bg-[#10b981] text-white w-6 h-6 flex items-center justify-center rounded-full">
        {data?.quantity}
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
            Total = ${price * data?.quantity}
          </p>
        </div>
        <div className="flex gap-2 items-center" style={{ marginTop: 0 }}>
          <Counter
            value={data?.quantity}
            increaseHandler={increaseItemQuantity}
            decreaseHandler={decreaseItemQuantity}
          />
          <BiTrash
            className="text-red-500 text-xl cursor-pointer"
            onClick={removeItem}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItem;
