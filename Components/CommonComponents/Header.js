import { categoryItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";

const Header = ({ loggedIn }) => {

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header>
      {/* ======================top Header Part Start====================== */}
      <div className="hidden lg:inline text-xs font-secondary bg-white">
        {/* Left  */}
        <div className="custom-container h-8 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BiPhoneCall />
            <p>
              We are available 24/7, Need help? Call Us:{" "}
              <span className="text-primary font-bold">+01234560352</span>
            </p>
          </div>

          {/* Right  */}
          <ul className="flex items-center gap-4">
            <Link href={"/about-us"}>
              <li className="hover:text-primary duration-200">About Us</li>
            </Link>
            <span>|</span>
            <Link href={"/contact-us"}>
              <li className="hover:text-primary duration-200">Contact Us</li>
            </Link>

            {loggedIn ? (
              <>
                <span>|</span>
                <Link href={"/user"}>
                  <li className="hover:text-primary duration-200">
                    My account
                  </li>
                </Link>
              </>
            ) : (
              <>
                <span>|</span>
                <Link href={"/signup"}>
                  <li className="flex items-center gap-1 hover:text-primary duration-200">
                    <MdOutlinePersonOutline />
                    <span>Sign Up</span>
                  </li>
                </Link>
                <span>|</span>
                <Link href={"/login"}>
                  <li className="flex items-center gap-1 hover:text-primary duration-200">
                    <MdOutlinePersonOutline />
                    <span>Login</span>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* ======================Top Header Part End====================== */}
      <div>
        {/* //TODO: Need to add sticky behavior of Main Header */}
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
                <Link href={"/checkout"}>
                  <FiShoppingCart className="hover:scale-110 duration-200 cursor-pointer" />
                </Link>
                {loggedIn && (
                  <Link href={"/user"}>
                    <MdOutlinePersonOutline className="hover:scale-110 duration-200 cursor-pointer" />
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>

        {/* ======================Main header Part End====================== */}

        {/* ======================Sub header Part Start====================== */}
        <nav className="bg-white text-sm font-primary relative hidden lg:flex">
          <div className="custom-container">
            <div className="h-12 flex justify-between items-center max-w-screen-2xl ">
              {/* Left  */}
              <ul className="flex gap-8 items-center">
                <li>
                  <span
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="cursor-pointer flex items-center gap-2 hover:text-primary duration-200"
                  >
                    Categories
                    <IoIosArrowUp
                      className={`text-gray-primary duration-300 ${
                        isCategoryOpen && "rotate-180 "
                      }`}
                    />
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
                  <Link href="/products">Products</Link>
                </li>
                <Link
                  href={"/offerPage"}
                  className="px-2 py-1 bg-[var(--clr-red-light)] text-red font-bold rounded-md relative"
                >
                  <p className="h-2 w-2 rounded-full bg-[var(--clr-red)] absolute -top-1 -right-1  animate-ping duration-300"></p>
                  <p className="h-2 w-2 rounded-full bg-[var(--clr-red)] absolute -top-1 -right-1 "></p>
                  <p className="hover:text-emerald-600 text-red-500">
                    {" "}
                    Offers{" "}
                  </p>
                  {/* <Button
                    className="hover:border-none"
                    text={"Offers"}
                    varientColor={"delete"}
                  /> */}
                </Link>
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
