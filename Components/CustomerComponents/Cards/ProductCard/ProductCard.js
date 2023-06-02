import Button from "@/Components/CommonComponents/shared/Button";
import Image from "next/image";
import { useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addToCart, removeCart } from "@/utils/cartItems";

const ProductCard = ({ data, loggedIn, existsInCart }) => {
  const { title, images, price, originalPrice, quantity, discount, id } = data;
  const dispatch = useDispatch();
  // const { loggedIn: isLoggedIn } = loggedIn;
  // const offerPrice = (price * (100 - discount)) / 100;

  const [hoverState, setHoverState] = useState(false);
  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };

  const add_To_Cart = async () => {
    await addToCart({
      productId: id,
      quantity: 1,
    });

    dispatch({
      type: "ADD_TO_CART",
      item: { product: data, quantity: 1 },
    });
  };

  const removeItem = async () => {
    await removeCart({
      productId: id,
    });
    dispatch({
      type: "REMOVE_CART",
      id,
    });
  };

  return (
    <div className="group bg-white min-w-[200px] relative rounded border border-gray-100 shadow-sm pt-4">
      <div className="overflow-hidden">
        <Link href={`/products/${id}`}>
          <Image
            src={images[0]}
            alt={title}
            width={150}
            height={150}
            className="mx-auto group-hover:scale-110 duration-300"
          />
        </Link>
      </div>
      {discount && (
        <p className="absolute top-4 right-4 bg-orange-400 text-white text-sm w-fit px-2 py-[2px] rounded ">
          ${discount} Off
        </p>
      )}
      <div className="px-4 pb-4">
        <p className="text-gray-primary">{quantity || "N/R"}</p>
        <Link href={`/products/${id}`}>
          <p className="text-gray-primary">{title || "N/R"}</p>
        </Link>
        <div className="flex justify-between items-center">
          {discount ? (
            <div className="flex gap-1">
              <p className="font-bold text-lg">${price}</p>
              <p className="font-bold line-through text-gray-primary">
                ${originalPrice}
              </p>
            </div>
          ) : (
            <p className="font-bold text-lg"> ${price}</p>
          )}

          <Button
            onClick={() => {
              if (!loggedIn) {
                toast.error("Login first to add product in cart");
                return;
              } else {
                if (existsInCart) {
                  removeItem();
                } else {
                  add_To_Cart();
                }
              }
            }}
            style={{
              ...(existsInCart
                ? {
                    background: "#059669",
                    color: "white",
                    transform: "scale(1.05)",
                  }
                : {}),
            }}
            Icon={MdShoppingBasket}
            className={`p-1 border-[var(--clr-gray)] text-lg   hover:bg-primary hover:text-white duration-200 hover:scale-105`}
            title={!existsInCart ? "Add To Cart" : "Remove from cart"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
