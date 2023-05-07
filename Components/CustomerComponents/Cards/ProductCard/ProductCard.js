import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
import { addToCart } from "@/store/actions/cartAction";
import Image from "next/image";
import { useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
<<<<<<< HEAD

const ProductCard = ({ data }) => {
  const { title, images, price, quantity, discount } = data;

  const offerPrice = (price * (100 - discount)) / 100;

  {
    /**======== Counter part========= */
  }
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    setCounter((prev) => prev + 1);
  };
  const decreaseHandler = () => {
    setCounter((prev) => prev - 1);
  };
  {
    /**======== Counter part end========= */
  }

  const [hoverState, setHoverState] = useState(false);
  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };
=======
import { useDispatch } from "react-redux";

const ProductCard = ({ data }) => {
  const {id, title, images, originalPrice, price, quantity, discount } = data;
const dispatch = useDispatch()
  const dataForCart = {
    id,
    title,
    images,
    originalPrice,
    price,
    discount
  }

>>>>>>> f61b693d8be1ec84d8d30fce4e1375b7a014ec06
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
<<<<<<< HEAD
        <p className="absolute top-4 right-4 bg-orange-400 text-white text-sm w-fit px-2 py-[2px] rounded ">
          {discount}% Off
=======
        <p className="absolute top-4 right-4 bg-orange-400 text-white text-sm w-fit px-2 py-[2px] rounded font-medium ">
          {isNaN(Number(discount)) ? (
            <span className="text-lg">{discount} </span>
          ) : (
            <span className="text-lg">${discount} </span>
          )}
          OFF
>>>>>>> f61b693d8be1ec84d8d30fce4e1375b7a014ec06
        </p>
      )}
      <div className="px-4 pb-4">
        <p className="text-gray-primary">{quantity || "N/R"}</p>
        <p className="text-gray-primary">{title || "N/R"}</p>
        <div className="flex justify-between items-center">
          {discount ? (
<<<<<<< HEAD
            <div className="flex gap-1">
              <p className="font-bold text-lg">${offerPrice}</p>
              <p className="font-bold line-through text-gray-primary">
                ${price}
              </p>
            </div>
          ) : (
            <p className="font-bold text-lg"> ${price}</p>
          )}
          {counter ? (
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
=======
            <div className="flex gap-2">
              <p className="font-bold text-lg">${price}</p>
              <p className="font-semibold text-base line-through text-gray-primary">
                ${originalPrice}
              </p>
            </div>
          ) : (
            <p className="font-bold text-lg"> ${originalPrice}</p>
          )}

          <Button
            onClick={() => dispatch(addToCart(dataForCart))}
            Icon={MdShoppingBasket}
            fill={true}
            className="text-xl hover:bg-primary active:bg-green-500"
          />
        </div>
>>>>>>> f61b693d8be1ec84d8d30fce4e1375b7a014ec06
      </div>
    </div>
  );
};

export default ProductCard;
