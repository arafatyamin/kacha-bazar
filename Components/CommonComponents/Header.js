import Image from 'next/image';
import { BiPhoneCall } from 'react-icons/bi';
import SearchBar from './SearchBar';
import {BsBell} from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import {MdOutlinePersonOutline} from 'react-icons/md';
import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai'

const Header = () => {
  const categories = [
    {
    title: "Fish and Meat",
    icon: "",
    child: [
      {
        title: "Fish",
        link: ""
      },
      {
        title: "Meat",
        link: ""
      },
    ]
  },
    {
    title: "Fish and Meat",
    icon: "",
    child: [
      {
        title: "Fish",
        link: ""
      },
      {
        title: "Meat",
        link: ""
      },
    ]
  },
    {
    title: "Fish and Meat",
    icon: "",
    
  },
]
  return (
    <header>
      {/* topHeader  */}
      <div className="h-8 text-xs flex justify-between items-center font-secondary bg-white">
        {/* Left  */}
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
      {/* top header end  */}
      {/* Main header  */}
      <div className="h-[78px] bg-primary flex justify-around items-center gap-8 md:gap-24 lg:gap-28 text-lg ">
        <img
          src="public\images\home\carp-fish.webp"
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
      {/* Main header  end*/}
      {/* sub header  */}
      <nav className="bg-white h-12 flex justify-between items-center text-sm font-primary">
        {/* Left  */}
        <ul className="flex gap-8">
          <div>
            <div>
              Categories
              //TODO: Need to implement dropdown
              {/* <div className="bg-red-100">
                <DropDown itemList={categories} />;
              </div> */}
            </div>
          </div>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Pages</li>
          <li>Offers</li>
        </ul>
        <ul className="flex gap-8">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </nav>
      {/* sub header end */}
    </header>
  );
}

export default Header


const DropDown =  ({itemList, isChild})  => {
  return (
    <div>
      {itemList?.map((item) => (
        <div className="flex flex-col gap-2">
          <p>hello2</p>
          {isChild ? (
            <>
              {console.log("true")}
              <p>-</p>
              <Link to={item.link}>
                <p>{item.title}</p>
              </Link>
            </>
          ) : (
            <>
              {console.log("here")}
              <img src={item?.icon} />
              <p>{item.title}</p>
              <AiOutlineRight className="items-end" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}