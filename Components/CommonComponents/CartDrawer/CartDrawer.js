import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import OfferCard from "@/Components/CustomerComponents/OfferPage/OfferCard";
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
        width={"30%"}
        bodyStyle={{ padding: "0px" }}

      >
        <div div className = "h-screen relative overflow-hidden" >
          <div className=" bg-slate-100 p-5 ">
            <div className="flex items-center gap-2 text-lg font-bold">
              <BsBagCheck></BsBagCheck>
              <p>Shopping Cart</p>
            </div>
          </div>
          <div className = "overflow-auto w-full h-[31.5rem] absolute" >
            {cartData?.map((data) => (
              <CartItem key={data._id} data={data} />
            ))}
          </div>
          <div div className = "flex items-center justify-between p-[10px] mt-3 bg-primary rounded-lg absolute right-0 left-0 bottom-0" >
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
