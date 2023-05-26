import MenuDrawer from '@/Components/CommonComponents/CartDrawer/MenuDrawer';
import Link from 'next/link';
import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgMenuMotion } from "react-icons/cg";
import { FaHome } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const BottomNav = () => {
  const loggedIn =true
    const [openDrawer, setOpenDrawer] = useState(false);
    const drawerHandler = () => setOpenDrawer(!openDrawer)
    const cartLength = useSelector(state=>state.cart.cart.length)
  return (
    <div className="bg-primary lg:hidden fixed bottom-0 w-full z-10">
      <div className="container">
        <nav className="h-12 text-white text-2xl flex justify-around items-center gap-8">
          <div>
            <CgMenuMotion
              className="hover:scale-105 duration-200 cursor-pointer"
              onClick={drawerHandler}
            />
            <MenuDrawer
              openDrawer={openDrawer}
              drawerHandlerFunc={drawerHandler}
            />
          </div>
          <Link href={"/"}>
            <FaHome className="hover:scale-105 duration-200 cursor-pointer" />
          </Link>
          <Link href={"/checkout"} className="relative  w-8">
            <span className="absolute -top-2 -right-1 bg-red-500 w-5 h-5 text-center rounded-full text-sm z-10">
              {cartLength}
            </span>
            <RiShoppingCartFill className="hover:scale-105 duration-200 cursor-pointer" />
          </Link>
          {!loggedIn ? (
            <Link href={"/user"}>
              <BsFillPersonFill className="hover:scale-105 duration-200 cursor-pointer" />
            </Link>
          ) : (
            <Link href={"/signup"}>
              <BiLogIn className="hover:scale-105 duration-200 cursor-pointer text-3xl" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default BottomNav