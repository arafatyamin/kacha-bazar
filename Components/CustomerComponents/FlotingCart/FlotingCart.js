import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import { useState, useEffect } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "@/utils/cartItems";

function FlotingCart() {
  let {
    cart: { cart },
    user,
  } = useSelector((state) => state);

  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      addcartItems();
    }
  }, [user]);

  const addcartItems = async () => {
    const items = await getCartItems();

    dispatch({
      type: "LOAD_CART_ITEMS",
      cartItems: items,
    });
  };
  // Calculate Total Price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
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
