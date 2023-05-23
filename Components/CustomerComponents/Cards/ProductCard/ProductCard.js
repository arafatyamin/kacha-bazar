import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
import Image from "next/image";
import { useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/actions/cartAction";
import { toast } from "react-hot-toast";

const ProductCard = ({ data, loggedIn }) => {
  const { title, images, price, quantity, discount, id } = data;
  const dispatch = useDispatch();
  const { loggedIn: isLoggedIn } = loggedIn;
  const offerPrice = (price * (100 - discount)) / 100;

  const [hoverState, setHoverState] = useState(false);
  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };

  // Add to cart handler
  const handleAddToCart = () => {
    dispatch(addToCart(data));
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
          {discount}% Off
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
              <p className="font-bold text-lg">${offerPrice}</p>
              <p className="font-bold line-through text-gray-primary">
                ${price}
              </p>
            </div>
          ) : (
            <p className="font-bold text-lg"> ${price}</p>
          )}

          <Button
            onClick={() => {
              console.log(isLoggedIn);
              if (!isLoggedIn) {
                toast.error("Login first to add product in cart");
                return;
              } else {
                handleAddToCart();
              }
            }}
            Icon={MdShoppingBasket}
            className="p-1 border-[var(--clr-gray)] text-lg hover:bg-primary hover:text-white duration-200 hover:scale-105"
            title="Add To Cart"
          />
        </div>
        {/* <p>${price}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
