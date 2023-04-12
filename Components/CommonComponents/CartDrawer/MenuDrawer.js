import { categoryItems } from "@/data/data";
import { Drawer } from "antd";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { DropDown } from "../Header";

const MenuDrawer = ({ openDrawer, setOpenDrawer }) => {
  return (
    <div className="">
      
      <Drawer
        placement={"left"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        width="300"
        bodyStyle={{ padding: "0px" }}
        
      >
        <div className="space-y-2">
          <div className="bg-primary flex justify-between items-center h-14 px-4">
            <Image
              src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
              alt="logo"
              width={110}
              height={40}
              className="cursor-pointer"
            />
            <RxCrossCircled
              className="text-4xl text-white font-bold cursor-pointer hover:scale-110 duration-200 "
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </div>
          <div >
            <h2 className="px-4 font-semibold text-gray-primary">All Categories</h2>
            <DropDown itemList={categoryItems} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer