import React, { useState } from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeProductData } from "@/store/thunk/admin/products";
import swal from "sweetalert";
import UpdateProduct from "./updateProduct";

const ProductsTable = ({ products }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});

  const productUpdateHandelar = (product) => {
    setUpdateModal(!updateModal);
    setSelectProduct(product);
  };

  const dispatch = useDispatch();
  const productDeleteHandelar = (id, name) => {
    swal({
      title: "Are you sure?",
      text: `Delete ${name} Product!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeProductData(id));
      }
    });
  };

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
              <th className="p-3">DISCOUNT</th>
              <th className="p-3">STOCK</th>
              <th className="p-3">DETAILS</th>
              <th className="p-3">PUBLISHED</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px] ">
            {products?.map((product, i) => (
              <tr
                key={"product" + i}
                className="text-left border-b border-opacity-20 border-gray-700 bg-white "
              >
                <td className="px-3 py-2 text-left">
                  <span>{product?.id?.toUpperCase()}</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 p-1 rounded-full bg-gray-100"
                      src={product?.images[0]}
                      alt="product"
                    />
                    <span className="ml-2">{product?.title}</span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span>{product?.category?.name}</span>
                </td>
                <td className="px-3 py-2">
                  <span>${product?.price || 0}</span>
                </td>
                <td className="px-3  py-2 ">
                  <span>${product?.discount || 0}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{product?.quantity || 0}</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <button className="hover:text-[#07895e] " title="Details">
                    <SlMagnifierAdd />
                  </button>
                </td>
                <td className="px-3 py-2">
                  <label
                    htmlFor={"publish" + i}
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                  >
                    <span className="relative">
                      <input
                        readOnly
                        checked={product?.published || false}
                        id={"publish" + i}
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
                    <button
                      onClick={() => productUpdateHandelar(product)}
                      className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300"
                    >
                      <FaRegEdit />
                    </button>

                    <button
                      onClick={() =>
                        productDeleteHandelar(product.id, product.title)
                      }
                      className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300"
                    >
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
      {updateModal && (
        <UpdateProduct
          setUpdateModal={setUpdateModal}
          selectProduct={selectProduct}
        />
      )}
    </div>
  );
};

export default ProductsTable;
