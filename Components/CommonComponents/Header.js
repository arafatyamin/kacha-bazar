import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import SearchBar from "./SearchBar";
import { categoryItems } from "@/data/data";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  return (
    <header>
      {/*   */}
      {/* ======================top Header Part Start====================== */}
      <div className="hidden lg:inline text-xs  font-secondary bg-white ">
        {/* Left  */}
        <div className="max-w-screen-2xl h-8 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BiPhoneCall />
            <p>
              We are available 24/7, Need help? Call Us:{" "}
              <span className="text-primary font-bold">+01234560352</span>
            </p>
          </div>

          {/* Right  */}
          <ul className="flex items-center gap-4">
            <li>About Us</li>
            <span>|</span>
            <li>Contact Us</li>
            <span>|</span>
            <li>My account</li>
            <span>|</span>
            <li className="flex items-center gap-1">
              <MdOutlinePersonOutline />
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
      {/* ======================Top Header Part End====================== */}
      <div className="sticky z-30 top-0">
        {/* ======================Main header Part Start====================== */}
        <div className="bg-primary  text-lg">
          <div className="custom-container">
            <div className="h-20 flex justify-around items-center gap-8 md:gap-24 lg:gap-28 max-w-screen-2xl">
              <Link href={"/"} className="hidden md:inline">
                <Image
                  src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
                  alt="logo"
                  width={110}
                  height={40}
                />
              </Link>
              <SearchBar />
              <nav className="gap-10 text-white text-2xl hidden md:flex">
                <BsBell className="hover:scale-110 duration-200 cursor-pointer" />
                <FiShoppingCart className="hover:scale-110 duration-200 cursor-pointer" />
                <MdOutlinePersonOutline className="hover:scale-110 duration-200 cursor-pointer" />
              </nav>
            </div>
          </div>
        </div>

        {/* ======================Main header Part End====================== */}

        {/* ======================Sub header Part Start====================== */}
        <nav className="bg-white text-sm font-primary relative hidden md:flex">
          <div className="custom-container">
            <div className="h-12 flex justify-between items-center max-w-screen-2xl ">
              {/* Left  */}
              <ul className="flex gap-8 items-center">
                <li>
                  <span
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="cursor-pointer flex items-center gap-2 hover:text-primary duration-200"
                  >
                    Categories{" "}
                    {isCategoryOpen ? <IoIosArrowUp /> : <AiOutlineDown />}
                  </span>
                  {isCategoryOpen && (
                    <div className="absolute z-10 h-[450px] w-80 overflow-auto rounded-md top-12 scrollbar-hide bg-white shadow-md">
                      <DropDown itemList={categoryItems} />
                    </div>
                  )}
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="hover:text-primary duration-200">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="hover:text-primary duration-200">
                  <Link href="#">Pages</Link>
                </li>
                <Button className="" text={"Offers"} varientColor={"delete"} />
              </ul>
              <ul className="flex gap-8">
                <li className="hover:text-primary duration-200">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:text-primary duration-200">
                  <Link href="/terms-and-condition">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </div>

      {/* ======================Sub header Part End====================== */}
    </header>
  );
};

export default Header;

const DropDown = ({ itemList }) => {
  return (
    <div className="p-6 space-y-4">
      {itemList?.map((item) => (
        <div className="hover:bg-gray-100 duration-200 transition ease-in-out rounded p-2 cursor-pointer">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center ">
              <Image src={item?.imgUrl} height={20} width={20} />
              <p>{item.title}</p>
            </div>
            {id == item?.id && isOpen ? (
              <AiOutlineDown className="items-end text-gray-primary" />
            ) : (
              <AiOutlineRight className="items-end text-gray-primary" />
            )}
          </div>
          <div className="gap-2 items-center m-2 hidden">
            <p>-</p>
            <Link href="#">
              <p className="hover:text-primary duration-150">{item.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
