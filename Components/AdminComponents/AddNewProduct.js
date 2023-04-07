import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "./Button";
import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";

const AddNewProduct = ({ newProduct, setNewProduct }) => {
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
        newProduct ? "right-0" : "right-[-100%]"
      }   w-full duration-300 `}
    >
      <div className="flex justify-end relative">
        <div
          onClick={() => setNewProduct(false)}
          className={`bg-black/60 w-full hidden lg:block`}
        ></div>

        <div className="w-full bg-white ">
          <div className="bg-gray-100 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg">Add Product</h2>
              <p className="text-xs">
                Add your product and necessary information from here
              </p>
            </div>

            <div>
              <button
                onClick={() => setNewProduct(!newProduct)}
                className="text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"
              >
                <TiDeleteOutline />
              </button>
            </div>
          </div>

          <div className="my-3 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm overflow-y-scroll h-[48%] bg-white text-xs">
            <div className="">
              <p>Product Image</p>
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

            <p className="py-2">Product SKU</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Product SKU"} />
            </div>

            <p className="py-2">Product Title/Name</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Product Title"} />
            </div>

            <p className="py-2">Product Slug</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Product Slug"} />
            </div>

            <p className="py-2">Product Description</p>
            <div className="col-span-2 ">
              <textarea
                className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                name=""
                id=""
                rows="5"
              ></textarea>
            </div>

            <p className="py-2">Parent Category</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select parent category"} />
            </div>

            <p className="py-2">Child Category</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select child category"} />
            </div>

            <p className="py-2">Product Type</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select child category"} />
            </div>

            <p className="py-2">Child Category</p>
            <div className="col-span-2 ">
              <SelectInput items={categorys} name={"select type"} />
            </div>

            <p className="py-2">Unit (kg/pc/lb/ml/g...etc)</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Unit"} />
            </div>

            <p className="py-2">Product Quantity</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Quantity"} />
            </div>

            <p className="py-2">Product Price</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Price"} />
            </div>

            <p className="py-2">Sale Price</p>
            <div className="col-span-2 ">
              <SearchInput placeholder={"Sale Price"} />
            </div>

            <p className="py-2">Product Tag</p>
            <div className="col-span-2 ">
              <SearchInput
                placeholder={
                  "Product Tag (write then press enter to add new tag) "
                }
              />
            </div>
            <div className="col-span-3 my-3 flex items-center gap-6">
              <button
                onClick={() => setNewProduct(false)}
                className="py-3 px-6 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full"
              >
                Cancel
              </button>

              <Button name={"Add Product"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
