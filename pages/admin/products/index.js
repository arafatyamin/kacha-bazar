import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Products = () => {
  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="max-w-[1240px] mx-auto">
        <h3 className="py-4 text-xl font-semibold">Products</h3>

        <div className="my-3 grid grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div>
            <input
              className="w-full p-3 rounded-md border bg-gray-100"
              type="text"
              placeholder="search ny product name"
            />
          </div>

          <div>
            <select
              name=""
              id=""
              className="w-full p-3 rounded-md border bg-gray-100"
            >
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-full p-3 rounded-md border bg-gray-100"
            >
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
              <option value="">orgamic food</option>
            </select>
          </div>
          <div>
            <button className="w-full h-full bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
              + Add Product
            </button>
          </div>
        </div>

        <div className="my-3 grid grid-cols-6 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-4">
            <input
              className=" p-2 w-full border border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 bg-white"
              type="file"
              placeholder="Drop SVG file"
            />
          </div>

          <div>
            <button className="w-full h-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
              Uplaod
            </button>
          </div>

          <div>
            <button className="w-full h-full bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

Products.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
