import React from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProductsTable = () => {
  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                SKU
              </th>
              <th className="p-3 text-left">PRODUCT NAME</th>
              <th className="p-3">CATEGORY</th>
              <th className="p-3">PRICE</th>
              <th className="p-3">STOCK</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">DISCOUNT</th>
              <th className="p-3">DETAILS</th>
              <th className="p-3">PUBLISHED</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {[...Array(20)].map((number) => (
              <tr
                key={number}
                className="text-left border-b border-opacity-20 border-gray-700 "
              >
                <td className="px-3 py-2 text-left">
                  <span>E88F5D</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 p-1 rounded-full bg-gray-100"
                      src="https://i.postimg.cc/13JnVvWJ/Urban-Frgr-Organic-Calming-Herbal-Tea-15-ct.jpg"
                      alt="product"
                    />
                    <span className="ml-2">Calming Herbal Tea</span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span>Drinks</span>
                </td>
                <td className="px-3 py-2">
                  <span>$5</span>
                </td>
                <td className="px-3 py-2">
                  <span>100</span>
                </td>
                <td className="px-3 py-2 ">
                  <span>Selling</span>
                </td>
                <td className="px-3  py-2 ">
                  <span></span>
                </td>
                <td className="px-3 py-2 text-center">
                  <button className="hover:text-[#07895e] " title="Details">
                    <SlMagnifierAdd />
                  </button>
                </td>
                <td className="px-3 py-2">
                  <label
                    for={number}
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                  >
                    <span className="relative">
                      <input
                        id={number}
                        type="checkbox"
                        className="hidden peer"
                      />
                      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200  peer-checked:bg-[#07895e]"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                    </span>
                  </label>
                </td>
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

export default ProductsTable;
