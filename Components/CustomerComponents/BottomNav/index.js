import MenuDrawer from "@/Components/CommonComponents/CartDrawer/MenuDrawer";
import Link from "next/link";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { CgMenuMotion } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

const BottomNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="bg-primary md:hidden fixed bottom-0 w-full z-10">
      <div className="container">
        <nav className="h-12 text-white text-2xl md:hidden flex justify-around items-center gap-8">
          <div onClick={() => setOpenDrawer(!openDrawer)}>
            <CgMenuMotion className="hover:scale-105 duration-200 cursor-pointer" />
            <MenuDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </div>
          <Link href={"/"}>
            <FaHome className="hover:scale-105 duration-200 cursor-pointer" />
          </Link>
          <Link href={"/#"}>
            <RiShoppingCartFill className="hover:scale-105 duration-200 cursor-pointer" />
          </Link>
          <Link href={"/#"}>
            <BsFillPersonFill className="hover:scale-105 duration-200 cursor-pointer" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
