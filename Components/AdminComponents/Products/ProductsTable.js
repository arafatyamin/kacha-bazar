import React, { useEffect, useState } from "react";
import { SlMagnifierAdd } from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import axios from "axios";
import swal from "sweetalert";
import UpdateProduct from "./updateProduct";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Pagination from "../Pagination";

const ProductsTable = ({ setProducts }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState({});
  const [pageData, setPageData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.admin.products);

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    try {
      setLoading(!isLoading);
      const response = await axios(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/admin/products?page=${page}&limit=10`
      );
      const { products, ...data } = response.data.data;
      setPageData(data);
      dispatch({
        type: "ADD_PRODUCTS",
        products: products,
      });
      setLoading(!isLoading);
    } catch (err) {
      console.log(err);
    }
  };

  const productUpdateHandelar = (product) => {
    setUpdateModal(!updateModal);
    setSelectProduct(product);
  };

  const productDeleteHandelar = (id, name, index) => {
    swal({
      title: "Are you sure?",
      text: `Delete "${name}" Product!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL + `/products/${id}`
          );
          dispatch({
            type: "REMOVE_PRODUCT",
            index,
          });
          toast.success("Product Deleted Successfully!");
        } catch (err) {
          toast.error("Something went wrong");
        }
      }
    });
  };

  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      {isError ? (
        <div className="text-center text-2xl text-red-600 p-3">
          <h2>{error}</h2>
        </div>
      ) : isLoading ? (
        <div className="text-center p-3">
          <h2>Loading...</h2>
        </div>
      ) : (
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
                    <Link
                      href={`/products/${product.id}`}
                      target="_blank"
                      className="hover:text-[#07895e] "
                      title="Details"
                    >
                      <SlMagnifierAdd />
                    </Link>
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
                          productDeleteHandelar(product.id, product.title, i)
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
          <Pagination pageData={pageData} page={page} setPage={setPage} />
        </div>
      )}

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
