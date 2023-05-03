import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import { cartData } from "@/data/cartData";
import { Drawer } from "antd";

import { BsBagCheck } from "react-icons/bs";

function CartDrawer({ openDrawer, setOpenDrawer }) {
  return (
    <>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        width="30%"
        bodyStyle={{ padding: "0px" }}
      >
        <div className=" min-h-screen  relative">
          <div className=" bg-slate-100 p-5 ">
            <div className="flex items-center gap-2 text-lg font-bold">
              <BsBagCheck></BsBagCheck>
              <p>Shopping Cart</p>
            </div>
          </div>
          <div>
            {cartData?.map((data) => (
              <CartItem key={data._id} data={data} />
            ))}
          </div>
          <div className="flex items-center justify-between p-[10px] mx-5 my-3 bg-primary rounded-lg absolute bottom-0 left-0 right-0 ">
            <p className="px-1 py-2 text-white text-lg">Procide to cheakout</p>
            <p className="py-1 px-2 bg-white text-lg rounded-lg text-green-600 font-semibold">
              $19:00
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
