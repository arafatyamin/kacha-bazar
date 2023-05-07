import { removeCategoryData } from "@/store/thunk/admin/category";
import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import UpdateCategory from "./UpdateCategory";

const CategoryTable = ({ categories, setPage, page }) => {
  const [updatePP, showUpdate] = useState(false);
  const [CategoryToUpdate, setCTU] = useState({});

  const dispatch = useDispatch();

  const deleteCategory = (id, name) => {
    swal({
      title: "Are you sure?",
      text: `Delete ${name} Category!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      dispatch(removeCategoryData(id));
    });
  };

  const categoryToUpdate = (id) => {
    const category = categories.find((c) => c.id === id);

    setCTU(category);
    showUpdate(true);
  };

  const isPP = page > 1 ? true : false;
  const isNP = categories?.length < 10 ? false : true;
  return (
    <div className="container pb-8 mx-auto rounded-md  bg-gray-100">
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full text-xs">
          <thead className="rounded-t-lg bg-gray-100 border border-b-none text-gray-500 ">
            <tr className="text-left ">
              <th title="Ranking" className="p-3 text-left">
                ID
              </th>
              <th className="p-3 text-left">ICON</th>
              <th className="p-3 w-[500px]">NAME</th>
              <th className="p-3">Sub Category </th>
              <th className="p-3">PUBLISHED</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {categories?.map((category, i) => (
              <tr
                key={"category" + i}
                className="text-left bg-white border-b border-opacity-20 border-gray-700 "
              >
                <td className="px-3 py-2 text-left">
                  <span>{category?.id.toUpperCase()}</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 p-1 rounded-full bg-gray-100"
                      src={category?.icon}
                      alt="product"
                    />
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 font-bold px-2 py-1 bg-gray-100 rounded-full mx-1">
                    {category?.name}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span>{category?.subCategories?.length}</span>
                </td>

                <td className="px-3 py-2">
                  <label
                    htmlFor={"publish" + i}
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                  >
                    <span className="relative">
                      <input
                        id={"publish" + i}
                        type="checkbox"
                        readOnly
                        checked={category?.published ? true : false}
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
                      className="text-lg mr-2 font-normal text-gray-400 hover:text-[#07895e] duration-300"
                      onClick={() => categoryToUpdate(category?.id)}
                    >
                      <FaRegEdit />
                    </button>

                    <button
                      className="text-lg mr-2 font-normal text-gray-400 hover:text-red-600 duration-300"
                      onClick={() =>
                        deleteCategory(category?.id, category?.name)
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
        {updatePP && (
          <UpdateCategory
            showUpdate={showUpdate}
            updatePP={updatePP}
            category={CategoryToUpdate}
          />
        )}
        <div className="rounded-b-md text-xs bg-white shadow-md border border-t-none font-semibold text-gray-500 ">
          <div className="p-4  flex  justify-between items-center col-span-4">
            <p>SHOWING 46-60 OF 312</p>

            <div className="flex items-center">
              <button
                disabled={!isPP}
                className={`p-2 ${
                  !isPP ? "" : "hover:bg-gray-200"
                } duration-300 rounded-md mx-1`}
                onClick={() => setPage((old) => old - 1)}
              >
                <AiOutlineLeft />
              </button>

              <button className="p-2 bg-[#07895e] text-white duration-300 rounded-md mx-1">
                {page}
              </button>
              {/* <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                2
              </button>
              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                3
              </button>

              <span>-</span>

              <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                21
              </button> */}
              <button
                disabled={!isNP}
                className={`p-2 ${
                  !isNP ? "" : "hover:bg-gray-200"
                } duration-300 rounded-md mx-1`}
                onClick={() => setPage((old) => old + 1)}
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
