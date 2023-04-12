import { categoryItems } from "@/data/data";
import { Drawer } from "antd";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { DropDown } from "../Header";

const MenuDrawer = ({ openDrawer, closeDrawerFunc }) => {
  return (
    <div>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={closeDrawerFunc}
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
            />
            <RxCrossCircled
              className="text-2xl text-white font-bold"
              onClick={closeDrawerFunc}
            />
          </div>
          <div>
            <h2 className="px-4">All Categories</h2>
            <DropDown itemList={categoryItems} />
          </div>
          <div>
            <h2 className="px-4">Pages</h2>
          </div>

        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer