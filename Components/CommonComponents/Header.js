import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import SearchBar from "./SearchBar";
import { categoryItems } from '@/data/data';
import { Fragment } from 'react';

const Header = () => {
  const categories = [
    {
      title: "Fish and Meat",
      icon: "/images/home/carp-fish.webp",
      child: [
        {
          title: "Fish",
          link: "/",
        },
        {
          title: "Meat",
          link: "/",
        },
      ],
    },
    {
      title: "Fish and Meat",
      icon: "/images/home/carp-fish.webp",
      child: [
        {
          title: "Fish",
          link: "/",
        },
        {
          title: "Meat",
          link: "/",
        },
      ],
    },
    {
      title: "Fish and Meat",
      icon: "/images/home/carp-fish.webp",
    },
  ];
  return (
    <header>
      {/*   */}
      {/* ======================top Header Part Start====================== */}
      <div className="hidden lg:inline text-xs  font-secondary bg-white ">
        {/* Left  */}
        <div className="max-w-screen-2xl h-8 mx-auto sm:px-10 flex justify-between items-center">
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
      {/* ======================Main header Part Start====================== */}
      <div className=" bg-primary  text-lg ">
        <div className="h-20 flex justify-around items-center gap-8 md:gap-24 lg:gap-28 max-w-screen-2xl px-10 ">
          <img
            src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
            alt="logo"
            width={110}
            height={40}
          />
          <SearchBar />
          <nav className="flex gap-10 text-white text-2xl ">
            <BsBell className="hover:scale-110 duration-200 cursor-pointer" />
            <FiShoppingCart className="hover:scale-110 duration-200 cursor-pointer" />
            <MdOutlinePersonOutline className="hover:scale-110 duration-200 cursor-pointer" />
          </nav>
        </div>
      </div>

      {/* ======================Main header Part End====================== */}

      {/* ======================Sub header Part Start====================== */}
      <nav className="bg-white text-sm font-primary relative">
        <div className="h-12 flex justify-between items-center max-w-screen-2xl px-10">
          {/* Left  */}
          <ul className="flex gap-8">
            <div>
              <div>
                Categories
                {/* //TODO: Need to implement dropdown */}
                <div className="bg-red-100 absolute z-10 h-96 w-60 overflow-auto">
                <DropDown itemList={categoryItems} />;
              </div> 
              </div>
            </div>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
            </li>
            <li>
              <Link href="#">Offers</Link>
            </li>
          </ul>
          <ul className="flex gap-8">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-condition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />

      {/* ======================Sub header Part End====================== */}
    </header>
  );
};

export default Header;


const DropDown =  ({itemList})  => {
  return (
    <div className="p-4 ">
      {itemList?.map((item) => (
        <div className="gap-2">
          <div className="flex gap-2 items-center justify-between">
            <div>
              <Image src={item?.imgUrl} height={20} width={20} />
              <p>{item.title}</p>
            </div>
            <AiOutlineRight className="items-end" />
          </div>
          <div className="flex gap-2 items-center">
            <p>-</p>
            <Link href="#">
              <p>{item.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
