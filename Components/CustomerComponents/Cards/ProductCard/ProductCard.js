import Counter from '@/Components/CommonComponents/Counter';
import Button from '@/Components/CommonComponents/shared/Button';
import Image from 'next/image';
import { useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';

const ProductCard = ({imgUrl, quantity, title, price=0, offer}) => {
    const offerPrice = price * (100 - offer)/100;

    {/**======== Counter part========= */}
    const[counter, setCounter] = useState(0)
    
    const increaseHandler = () => {
      setCounter(prev => prev+1)
      
    }
    const decreaseHandler = () => {
      setCounter(prev => prev -1)
    }
    {/**======== Counter part end========= */}

    const [hoverState, setHoverState] = useState(false)
    const hoverStateHandler = () => {
      setHoverState(!hoverState)
    }
  return (
    <div className="bg-white min-w-[200px] relative rounded border border-gray-100 shadow-sm pt-4" 
    onMouseEnter={hoverStateHandler}
    onMouseLeave={hoverStateHandler}
    >
      <Image src={imgUrl} width={200} height={200} className={`mx-auto ${hoverState && "scale-105  duration-300 object-cover"}`} />
      {offer && (
        <p className="absolute top-4 right-4 bg-orange-400 text-white text-sm w-fit px-2 py-[2px] rounded ">
          {offer}% Off
        </p>
      )}
      <div className="px-4 pb-4">
        <p className="text-gray-primary">{quantity || "N/R"}</p>
        <p className="text-gray-primary">{title || "N/R"}</p>
        <div className="flex justify-between items-center">
          {offer ? (
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
            <Counter value={counter} increaseHandler={increaseHandler} decreaseHandler={decreaseHandler}/>
          ) : (
            <Button
              onClick={increaseHandler}
              Icon={MdShoppingBasket}
              className="p-1 border-[var(--clr-gray)] text-lg hover:bg-primary hover:text-white duration-200 hover:scale-105"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard