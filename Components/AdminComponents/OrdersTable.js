import React from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SelectInput from "./SelectInput";

const OrdersTable = () => {
  const status = [
    {
      _id: 1,
      name: "Delivary",
    },
    {
      _id: 2,
      name: "Pending",
    },
    {
      _id: 3,
      name: "Processing",
    },
    {
      _id: 4,
      name: "Cancel",
    },
  ];

  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                SR NO
              </th>
              <th className="p-3 text-left">TIME</th>
              <th className="p-3">SHIPPING ADDRESS</th>
              <th className="p-3">PHONE</th>
              <th className="p-3">METHOD</th>
              <th className="p-3">AMOUNT</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">ACTIONS</th>
              <th className="p-3">INVOICE</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {[...Array(20)].map((number, i) => (
              <tr
                key={i}
                className="text-left bg-white border-b border-opacity-20 border-gray-700 "
              >
                <th className="px-3 py-2 text-left">
                  <span>{i + 1}</span>
                </th>
                <td className="px-3 py-2 text-left">
                  <span>Apr 5, 2023 </span>
                </td>
                <td className="px-3 py-2">
                  <span>Mirpur</span>
                </td>
                <td className="px-3 py-2">
                  <span>+062-123654 </span>
                </td>
                <th className="px-3 py-2">
                  <span>COD</span>
                </th>
                <td className="px-3 py-2 ">
                  <span>$80.00 </span>
                </td>
                <td className="px-3  py-2 ">
                  <span className="py-1 px-3 bg-[#f6ea81] rounded-full">
                    Pending
                  </span>
                </td>

                <td className="px-3 py-2">
                  <SelectInput items={status} name={"Pending"} />
                </td>
                <td className="px-3 py-2">
                  <div className="flex justify-end items-center">
                    <button className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300">
                      <SlMagnifierAdd />
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

export default OrdersTable;
