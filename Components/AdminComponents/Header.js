import React, { useState } from "react";
import { FaMoon, FaBell } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);

  return (
    <nav className="shadow-lg">
      <div className="max-w-[1440px] mx-auto p-3 flex items-center justify-between">
        <div>{/* hambarger  */}</div>
        <div className="flex items-center text-xl text-[#0E9F6E] ">
          {/* button  */}
          <div className="mr-5">
            <button className="p-3 mx-2">
              <FaMoon />
            </button>
            <button className="p-3 relative">
              <FaBell />
              <div className="absolute -top-0 left-1 ">
                <p className="flex justify-center text-sm items-center text-white bg-red rounded-full h-5 w-5">
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

            {openProfileModal && (
              <div className="absolute bottom-100 rounded-lg shadow-lg right-0 text-gray-600 font-semibold  bg-white w-[250px]">
                <div>
                  <button className="w-full flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                    <RxDashboard className="mr-2" />
                    <span className="">Dashbord</span>
                  </button>

                  <button className="w-full flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                    <RxDashboard className="mr-2" />
                    <span className="">Dashbord</span>
                  </button>

                  <button className="w-full rounded-lg rounded-t-none flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                    <RxDashboard className="mr-2" />
                    <span className="">Dashbord</span>
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
