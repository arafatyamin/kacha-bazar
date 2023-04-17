import { categoryItems } from "@/data/data";
import { Drawer } from "antd";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";
import DropDown from "../DropDown";
import { pageList } from "@/data/pageList";
import Link from "next/link";

const MenuDrawer = ({ openDrawer, drawerHandlerFunc }) => {
  return (
    <div className="">
      <Drawer
        placement={"left"}
        closable={false}
        onClose={drawerHandlerFunc}
        open={openDrawer}
        width="350px"
        bodyStyle={{ padding: "0px" }}
      >
        <div className="space-y-2 ">
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
              onClick={drawerHandlerFunc}
            />
          </div>
          <div>
            <div>
              <h3 className="p-4 font-semibold ">Pages</h3>
              <hr />
              <div className="p-6 text-base scrollbar-hide">
                {pageList.map((page, index) => (
                  <Link href={page.link} key={index}>
                    <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-primary rounded p-2 cursor-pointer duration-200">
                      <page.icon />
                      <p>{page.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="scrollbar-hide">
              <h3 className="p-4 font-semibold">
                All Categories
              </h3>
              <hr />
              <DropDown itemList={categoryItems} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
