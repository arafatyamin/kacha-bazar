import React, { useState } from "react";
import { FaMoon, FaBell } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineLogout, AiFillSetting } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);

  return (
    <nav className="shadow-lg">
      <div className="max-w-[1440px] mx-auto p-3 flex items-center justify-between text-xl text-[#0E9F6E]">
        <div>
          {/* hambarger  */}
          <button className="block lg:hidden">
            <GoThreeBars />
          </button>
        </div>
        <div className="flex items-center  ">
          {/* button  */}
          <div className="mr-5">
            <button className="p-3 mx-2">
              <FaMoon />
            </button>
            <button className="p-3 relative">
              <FaBell />
              <div className="absolute -top-0 left-1 ">
                <p className="flex justify-center text-sm items-center text-white bg-red-600 rounded-full h-5 w-5">
                  7
                </p>
              </div>
            </button>
          </div>

          <div className="relative">
            {/* avatar  */}
            <div className="flex-shrink-0">
              <button onClick={() => setOpenProfileModal(!openProfileModal)}>
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt=""
                  className="w-8 h-8 border rounded-full bg-gray-500 border-gray-700"
                />
              </button>
            </div>

            {/* user pfoile modal  */}
            {openProfileModal && (
              <div className="absolute bottom-100 rounded-lg shadow-lg right-0 text-gray-600 text-sm font-semibold  bg-white w-[250px]">
                <div>
                  <button className="w-full flex items-center p-3 duration-300 hover:bg-gray-200 ">
                    <RxDashboard className="mr-2" />
                    <span className="">Dashbord</span>
                  </button>

                  <button className="w-full flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                    <AiFillSetting className="mr-2" />
                    <span className="">Edit Profile</span>
                  </button>

                  <button className="w-full rounded-lg rounded-t-none flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                    <AiOutlineLogout className="mr-2" />
                    <span className="">Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
