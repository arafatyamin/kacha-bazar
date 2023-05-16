import AddNewCategory from "@/Components/AdminComponents/Category/AddNewCategory";
import AddNewSubCategory from "@/Components/AdminComponents/Category/AddNewSubCategory";
import Button from "@/Components/AdminComponents/Button";
import CategoryTable from "@/Components/AdminComponents/Category/CategoryTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import handleRedirect from "@/auth/handleRedirect";

const Category = () => {
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState(false);

  return (
    <section className=" bg-gray-100 min-h-screen">
      <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
        <h3 className="lg:py-4 text-xl font-semibold p-2 ">Category</h3>

        {/* products search section  */}
        <div className="my-3 grid grid-cols-1 lg:grid-cols-5 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
          <div className="lg:col-span-3 col-span-2">
            <SearchInput placeholder={"search by category type"} />
          </div>
          <div className="w-full" onClick={() => setNewCategory(!newCategory)}>
            <Button name={"Add Category"} />
          </div>
          <div
            className="w-full"
            onClick={() => setNewSubCategory(!newSubCategory)}
          >
            <Button name={"Add Sub Category"} />
          </div>
        </div>

        <CategoryTable />
      </div>

      <AddNewCategory
        newCategory={newCategory}
        setNewCategory={setNewCategory}
      />
      <AddNewSubCategory
        newSubCategory={newSubCategory}
        setNewSubCategory={setNewSubCategory}
      />
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Category.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Category;
