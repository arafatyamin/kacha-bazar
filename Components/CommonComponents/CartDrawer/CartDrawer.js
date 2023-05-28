import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import { Drawer } from "antd";
import Link from "next/link";

import { BsBagCheck, BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

function CartDrawer({ openDrawer, setOpenDrawer }) {
  const { cart } = useSelector((state) => state.cart);
 
  // Calculate the total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item?.product?.price * item.quantity,
    0
  );

  return (
    <>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        width={"30%"}
        bodyStyle={{ padding: "0px" }}
      >
        <div div className="h-screen relative overflow-hidden">
          <div className=" bg-slate-100 p-5 ">
            <div className="flex items-center gap-2 text-lg font-bold">
              <BsBagCheck></BsBagCheck>
              <p>Shopping Cart</p>
            </div>
          </div>
          <div className="overflow-auto w-full h-[31.5rem] absolute">
            {cart.length <= 0 ? (
              <div className="p-2 flex justify-center items-center h-full">
                <div className="text-gray-300">
                  <BsCart4 size={50} className="mx-auto mb-2" />
                  <h3 className="font-semibold text-xl">Cart Is Empty</h3>
                </div>
              </div>
            ) : (
              cart.map((data,i) => <CartItem key={data.id} index={i} data={data} />)
            )}
          </div>
          <Link href="/checkout">
            <div
              div
              className="flex items-center justify-between p-[10px] mt-3 bg-primary rounded-lg absolute right-0 left-0 bottom-0 hover:bg-emerald-600 transition-colors"
            >
              <p className="px-1 py-2 text-white text-lg">
                Procide to cheakout
              </p>
              <p className="py-1 px-2 bg-white text-lg rounded-lg text-green-600 font-semibold">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
