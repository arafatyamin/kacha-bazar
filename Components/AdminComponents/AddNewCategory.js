import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";

const AddNewCategory = ({ newCategory, setNewCategory }) => {
  const categorys = [
    {
      _id: 1,
      name: "Fruits & Vegetable",
    },
    {
      _id: 2,
      name: "Organic Food",
    },
    {
      _id: 3,
      name: "Fish & Meat",
    },
    {
      _id: 4,
      name: "Drinks",
    },
    {
      _id: 5,
      name: "Fresh Seafood",
    },
    {
      _id: 6,
      name: "Cooking Essentials",
    },
    {
      _id: 7,
      name: "Biscuits & Cakes",
    },
    {
      _id: 8,
      name: "Sauces & Pickles",
    },
    {
      _id: 9,
      name: "Breakfast",
    },
    {
      _id: 10,
      name: "Milk & Dairy",
    },
    {
      _id: 11,
      name: "Household Tools",
    },
    {
      _id: 12,
      name: "Pet Care",
    },
    {
      _id: 13,
      name: "Snacks & Instant",
    },
    {
      _id: 14,
      name: "Honey",
    },
    {
      _id: 15,
      name: "Jam & Jelly",
    },
    {
      _id: 16,
      name: "Beauty & Health",
    },
  ];

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

          <div className="my-3 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm  bg-white text-xs">
            <div className="">
              <p>Category Icon</p>
            </div>
            <div className="col-span-2 ">
              <fieldset className="w-full space-y-1 text-gray-100">
                <div className="flex">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
                  />
                </div>
              </fieldset>

              <div className="w-[100px] h-[100px] p-2 border my-2 rounded-md">
                <img
                  src="https://res.cloudinary.com/ahossain/image/upload/v1679294836/qexmds3okaeztxs8rm9j.webp"
                  alt="user avatar"
                />
              </div>
            </div>

            <p className="py-2">Product Type</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select parent category"} />
            </div>

            <p className="py-2">Parent Category</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Parent Category"} />
            </div>

            <p className="py-2">Child Category</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Child Category"} />
            </div>

            <p className="py-2">Child Category</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select child category"} />
            </div>

            <p className="py-2">Sale Price</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Sale Price"} />
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
              className="py-3 px-6 bg-[#108a61] rounded-md 
            hover:bg-[#078057] text-white  duration-300 w-full"
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
