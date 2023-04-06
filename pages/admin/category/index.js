import AddNewCategory from "@/Components/AdminComponents/AddNewCategory";
import Button from "@/Components/AdminComponents/Button";
import CategoryTable from "@/Components/AdminComponents/CategoryTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

const Category = () => {
  const [newCategory, setNewCategory] = useState(false);

  console.log(newCategory);

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
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Category</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-5 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="col-span-2">
            <SearchInput placeholder={"search by category type"} />
          </div>

          <div className="col-span-2">
            {<SelectInput items={categorys} name={"Category"} />}
          </div>
          <div className="w-full" onClick={() => setNewCategory(!newCategory)}>
            <Button name={"Add Category"} />
          </div>
        </div>

        {/* category table  */}
        <CategoryTable />
      </div>

      <AddNewCategory
        newCategory={newCategory}
        setNewCategory={setNewCategory}
      />
    </section>
  );
};

export default Category;

Category.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
