import { categoryItems } from "@/data/data";
import { Drawer } from "antd";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import { DropDown } from "../Header";

const MenuDrawer = ({ openDrawer, setOpenDrawer }) => {
  return (
    <div>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        width="300"
        bodyStyle={{ padding: "0px" }}
        // key={"right"}
        // rootClassName=""
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
              onClick={setOpenDrawer}
            />
          </div>
          <div>
            <h2 className="ml-4">All Categories</h2>
            <DropDown itemList={categoryItems} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
