import React from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const StaffTable = () => {
  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                ID
              </th>
              <th className="p-3 text-left">NAME</th>
              <th className="p-3">EMAIL</th>
              <th className="p-3">CONTACT</th>
              <th className="p-3">JOINING DATE </th>
              <th className="p-3">ROLE</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {[...Array(20)].map((number, i) => (
              <tr
                key={i}
                className="text-left bg-white border-b border-opacity-20 border-gray-700 "
              >
                <td className="px-3 py-2 text-left">
                  <span>D30C</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 p-1 rounded-full bg-gray-100"
                      src="https://i.ibb.co/WpM5yZZ/9.png"
                      alt="staff avatar"
                    />
                    <span className="ml-2">Shohag Roy</span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span>vaghasiyaa966@gmail.com </span>
                </td>
                <td className="px-3 py-2">
                  <span>+880 1760567 555</span>
                </td>
                <td className="px-3 py-2">
                  <span>Apr 6, 2023 </span>
                </td>
                <th className="px-3 py-2 ">
                  <span>Admin</span>
                </th>

                <td className="px-3 py-2">
                  <div className="flex justify-center items-center">
                    <button className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300">
                      <FaRegEdit />
                    </button>

                    <button className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
          <div className="p-4  flex  justify-between items-center col-span-4">
            <p>SHOWING 46-60 OF 312</p>

            <div className="flex items-center">
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                <AiOutlineLeft />
              </button>

              <button className="p-2 bg-[#07895e] text-white duration-300 rounded-md mx-1">
                1
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                2
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                3
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                4
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                5
              </button>

              <span>-</span>

              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                21
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffTable;
