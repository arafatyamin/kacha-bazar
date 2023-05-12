import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
import Image from "next/image";
import { useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = ({ data }) => {
  const router = useRouter();
  const { route } = router;
  const { title, images, price, quantity, discount, id } = data;

  const offerPrice = (price * (100 - discount)) / 100;

  /**======== Counter part========= */

  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    setCounter((prev) => prev - 1);
  };

  /**======== Counter part end========= */

  const [hoverState, setHoverState] = useState(false);
  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };
  return (
    <div className="group bg-white min-w-[200px] relative rounded border border-gray-100 shadow-sm pt-4">
      <div className="overflow-hidden">
        <Image
          src={images[0]}
          alt={title}
          width={150}
          height={150}
          className="mx-auto group-hover:scale-110 duration-300"
        />
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
          {route === "/" ? null : counter ? (
            <Counter
              value={counter}
              increaseHandler={increaseHandler}
              decreaseHandler={decreaseHandler}
            />
          ) : (
            <Button
              onClick={increaseHandler}
              Icon={MdShoppingBasket}
              className="p-1 border-[var(--clr-gray)] text-lg hover:bg-primary hover:text-white duration-200 hover:scale-105"
            />
          )}
        </div>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
