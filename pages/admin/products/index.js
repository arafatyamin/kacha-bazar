import AddNewProduct from "@/Components/AdminComponents/AddNewProduct";
import Button from "@/Components/AdminComponents/Button";
import ProductsTable from "@/Components/AdminComponents/ProductsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

const Products = () => {
  const [newProduct, setNewProduct] = useState(false);

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

  const prices = [
    {
      _id: 1,
      name: "Low to High",
    },
    {
      _id: 2,
      name: "High to Low",
    },
  ];

  return (
    <section className="  bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Products</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <SearchInput placeholder={"search by product name"} />

          <div>{<SelectInput items={categorys} name={"Category"} />}</div>
          <div>{<SelectInput items={prices} name={"Price"} />}</div>
          <div onClick={() => setNewProduct(!newProduct)}>
            <Button name={"Add Product"} />
          </div>
        </div>

        {/* products upload section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-6 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="lg:col-span-4">
            <input
              className="p-2 w-full border border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 bg-white"
              type="file"
              placeholder="Drop SVG file"
            />
          </div>

          <div>
            <button className="w-full p-3 lg:p-0 h-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
              Uplaod
            </button>
          </div>

          <div>
            <button className="w-full h-full p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
              Download
            </button>
          </div>
        </div>

        {/* products table  */}

        <ProductsTable />
      </div>

      <AddNewProduct newProduct={newProduct} setNewProduct={setNewProduct} />
    </section>
  );
};

export default Products;

Products.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
