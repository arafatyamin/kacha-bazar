import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { SlMagnifierAdd } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdminTable = () => {
  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                ID
              </th>
              <th className="p-3 text-left">JOINING DATE</th>
              <th className="p-3 w-[250px]">NAME</th>
              <th className="p-3 w-[400px]">EMAIL </th>
              <th className="p-3">PHONE</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {[...Array(10)].map((number, i) => (
              <tr
                key={i}
                className="text-left border-b border-opacity-20 border-gray-700 "
              >
                <th className="px-3 py-2 text-left">
                  <span>C1CC</span>
                </th>
                <td className="px-3 py-2 text-left">
                  <span>Apr 3, 2023 </span>
                </td>

                <td className="px-3 py-2">
                  <span>Shohag Roy</span>
                </td>
                <td className="px-3 py-2">
                  <span>admin@gmail.com</span>
                </td>
                <td className="px-3 py-2">
                  <span></span>
                </td>

                <td className="px-3 py-2">
                  <div className="flex justify-center items-center">
                    <button className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300">
                      <SlMagnifierAdd />
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

export default AdminTable;
