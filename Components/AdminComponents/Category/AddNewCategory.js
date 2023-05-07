import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postCategoryData } from "@/store/thunk/admin/category";

const AddNewCategory = ({ newCategory, setNewCategory }) => {
  const [preview, setPreview] = useState();

  const dispatch = useDispatch();
  const { postCategoryLoading } = useSelector((state) => state.admin);

  const showPreview = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setPreview(() => reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(postCategoryData(formData, setNewCategory));
    e.target.reset();

    // try {
    //   const response = await axios.post(
    //     process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/categories",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log(response.data); // contains category details
    // setPreview("");
    // setNewCategory(false);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div
      className={`fixed top-0 ${
        newCategory ? "right-0" : "right-[-100%]"
      }   w-full duration-300 `}
    >
      <div className="flex justify-end relative">
        <div
          onClick={() => setNewCategory(false)}
          className={`bg-black/60 hidden lg:block w-full h-screen`}
        ></div>

        <div className="w-full bg-white ">
          <div className="bg-gray-100 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg">Add Category</h2>
              <p className="text-xs">
                Add your Product category and necessary information from here
              </p>
            </div>

            <div>
              <button
                onClick={() => setNewCategory(!newCategory)}
                className="text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"
              >
                <TiDeleteOutline />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-3 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm  bg-white text-xs">
              <p className="py-2">Name</p>
              <div className="col-span-2 ">
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
                />
              </div>
              <div className="">
                <p>Icon</p>
              </div>
              <div className="col-span-2 ">
                <fieldset className="w-full space-y-1 text-gray-100">
                  <div className="flex">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={showPreview}
                      className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
                    />
                  </div>
                </fieldset>
                {preview && (
                  <div className="w-[100px] h-[100px] p-2 border my-2 rounded-md">
                    <img src={preview} alt="category icon" />
                  </div>
                )}
              </div>

              <p className="py-2">Publish</p>
              <div className="col-span-2 ">
                <label
                  htmlFor="publish"
                  className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                >
                  <span className="relative">
                    <input
                      id="publish"
                      name="publish"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200  peer-checked:bg-[#07895e]"></div>
                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                  </span>
                </label>
              </div>
            </div>
            <div className="col-span-3 px-3 flex items-center gap-6">
              <button
                onClick={() => setNewCategory(false)}
                className="py-3 px-6 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="py-3 px-6 bg-[#108a61] rounded-md 
            hover:bg-[#078057] text-white  duration-300 w-full"
              >
                {postCategoryLoading ? "Loading..." : "Add Category"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
