import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function FlotingCart() {
  const { cart } = useSelector((state) => state.cart);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.userQuantity,
    0
  );

  return (
    <div className="h-24 w-[75px] hidden lg:block bg-gray-200 rounded-md">
      <div onClick={() => setOpenDrawer(!openDrawer)}>
        <div className=" p-2 ">
          <BsHandbagFill className="text-center mx-auto text-xl text-primary font-bold"></BsHandbagFill>
          <p className="text-sm text-center pt-2 ">{cart.length} items</p>
        </div>
        <div className="bg-green-700 py-2 rounded-b-md">
          <p className="text-center text-white">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-full">
        <CartDrawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        ></CartDrawer>
      </div>
    </div>
  );
}

export default FlotingCart;
