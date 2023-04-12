import { Drawer } from "antd";
import { useState } from "react";
import { BsBagCheck } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";


function CartDrawer({ openDrawer, setOpenDrawer }) {
  const [count, setCount] = useState(1);

  const cartData = [
    {
      name: "Mint",
      photo: "https://i.postimg.cc/251Skfbd/Mint-6-5ct.jpg",
      quantity: "2",
      price: "50.00",
    },
    {
      name: "Pumpkin",
      photo: "https://i.postimg.cc/2Sc5N568/Mini-Pumpkin-Box-each.jpg",
      quantity: "2",
      price: "50.00",
    },
  ];

  return (
    <>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        width="100%"
        bodyStyle={{ padding: "0px" }}
        // key={"right"}
        // rootClassName=""
      >
        <div className=" min-h-screen relative">
          <div className=" bg-slate-100 p-5 ">
            <div className="flex items-center gap-2 text-lg font-bold">
              <BsBagCheck></BsBagCheck>
              <p>Shopping Cart</p>
            </div>
          </div>
          <div>
            {cartData.map((data) => (
              <div className="flex py-3 px-4">
                <img className="h-16 w-auto" src={data.photo}></img>
                <div className="flex items-center justify-between flex-grow">
                  <div>
                    <p className="text-lg font-semibold">{data.name}</p>
                    <p className="text-gray-500 text-sm">
                      Item Price: ${data.price}
                    </p>
                    <p className="text-lg">${200}</p>
                  </div>
                  <div className="flex items-center content-center my-auto  py-0 rounded-md border border-gray-100 font-semibold">
                    <div className="m-0">
                      <button
                        disabled={count < 2 ? true : false}
                        onClick={() => setCount(count - 1)}
                        className=" px-3 py-1 my-0 mx-auto text-lg "
                      >
                        −
                      </button>
                    </div>
                    <div className="m-0">
                      <p className=" px-3 py-1 my-0 mx-auto ">{count}</p>
                    </div>
                    <div className="m-0">
                      <button
                        onClick={() => setCount(count + 1)}
                        className=" px-3 py-1 my-0 mx-auto text-lg "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <BiTrash className="text-red-500 text-xl "></BiTrash>
                </div>
              </div>
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
