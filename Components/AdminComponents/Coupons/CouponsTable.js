import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../Pagination";

const CouponsTable = ({
  loading,
  coupons,
  deleteCoupon,
  page,
  setPage,
  pageData,
}) => {
  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        {loading ? (
          <div className="text-center p-3">
            <h2>Loading...</h2>
          </div>
        ) : (
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
              <tr className="text-left ">
                <th title="Ranking" className="p-3 text-left">
                  ID
                </th>
                <th className="p-3 text-left">START DATE </th>
                <th className="p-3">END DATE </th>
                <th className="p-3">CAMPAIGNS NAME </th>
                <th className="p-3">CODE</th>
                <th className="p-3">PERCENTAGE</th>
                <th className="p-3">Category</th>
                <th className="p-3">STATUS</th>
                <th className="p-3">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {coupons?.map((coupon, i) => (
                <tr
                  key={i}
                  className="text-left bg-white border-b border-opacity-20 border-gray-700 "
                >
                  <td className="px-3 py-2 text-left">
                    <span>{coupon?.id?.toUpperCase()}</span>
                  </td>
                  <td className="px-3 py-2 text-left">
                    <span>{coupon?.createdAt}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span>Apr 29, 2023 </span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{coupon?.campaignName}</span>
                  </td>
                  <td className="px-3 py-2">
                    <span>{coupon?.campaignCode}</span>
                  </td>
                  <td className="px-3 py-2 ">
                    <span>{coupon?.discountPercentage}%</span>
                  </td>
                  <td className="px-3  py-2 ">
                    <span>{coupon?.category?.name}</span>
                  </td>
                  <td className="px-3 py-2 text-center">
                    {new Date().getTime() <
                    new Date(
                      coupon?.couponValidityTime || coupon?.expiresAt
                    ).getTime() ? (
                      <span className="py-1 px-3 bg-green-600/20 rounded-full text-green-600">
                        Active
                      </span>
                    ) : (
                      <span className="py-1 px-3 bg-red-600/20 rounded-full text-red-600">
                        Ended
                      </span>
                    )}
                  </td>

                  <td className="px-3 py-2">
                    <div className="flex justify-center items-center">
                      <button className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300">
                        <FaRegEdit />
                      </button>

                      <button
                        className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300"
                        onClick={() =>
                          deleteCoupon(coupon?.id, coupon?.campaignName, i)
                        }
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Pagination pageData={pageData} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default CouponsTable;
