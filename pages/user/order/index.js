import Link from "next/link";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const OrderPage = () => {
  return <div className="flex flex-col bg-white">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border border-gray-100 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ORDERTIME
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                METHOD
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                STATUS
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                TOTAL
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">5f46</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">April 11, 2023	</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">COD</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">Pending</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">$65.00</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium"><a href="#!" className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full">Details</a></td>
            </tr>
            <tr className="">
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">1D04</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">April 11, 2023	</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">COD</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-orange-500">Pending</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">$65.00</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium"><a href="#!" className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full">Details</a></td>
            </tr>
            <tr>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">5444</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">April 11, 2023	</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">COD</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">Delivered</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">$65.00</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium"><a href="#!" className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full">Details</a></td>
            </tr>
            <tr>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">5F46</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">April 11, 2023	</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">COD</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">Pending</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium">$65.00</td>
              <td className="px-5 py-3 whitespace-nowrap text-sm font-medium"><a href="#!" className="px-3 py-1 bg-emerald-100 text-xs text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all font-semibold rounded-full">Details</a></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
      <div className="rounded-b-md text-xs bg-white shadow-md font-semibold text-gray-500 ">
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
;
};

export default OrderPage;
