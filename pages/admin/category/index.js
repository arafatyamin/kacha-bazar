import AddNewCategory from "@/Components/AdminComponents/Category/AddNewCategory";
import AddNewSubCategory from "@/Components/AdminComponents/Category/AddNewSubCategory";
import Button from "@/Components/AdminComponents/Button";
import CategoryTable from "@/Components/AdminComponents/Category/CategoryTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCategorysData } from "../../../store/thunk/admin/category";

const Category = () => {
  const [newCategory, setNewCategory] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { categories, categoryLoading, categoryError, error } = useSelector(
    (state) => state.admin
  );

  console.log(categoryLoading);

  useEffect(() => {
    dispatch(getCategorysData());
  }, [page]);

  // const getCategories = async () => {
  //   try {
  //     const response = await axios.get(
  //       process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
  //         `/categories?page=${page}&limit=10`
  //     );
  //     setCategories(response.data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

        {/* category table  */}
        {categoryError ? (
          <div className="text-center text-2xl text-red-600 p-3">
            <h2>{error}</h2>
          </div>
        ) : categoryLoading ? (
          <div className="text-center p-3">
            <h2>Loading...</h2>
          </div>
        ) : (
          <CategoryTable
            categories={categories}
            setPage={setPage}
            page={page}
          />
        )}
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

export default Category;

Category.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
