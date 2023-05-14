import { useState, useEffect } from "react";
import axios from "axios";
import AddNewProduct from "@/Components/AdminComponents/Products/AddNewProduct";
import Button from "@/Components/AdminComponents/Button";
import ProductsTable from "@/Components/AdminComponents/Products/ProductsTable";
import SearchInput from "@/Components/AdminComponents/SearchInput";
import SelectInput from "@/Components/AdminComponents/SelectInput";
import AdminLayout from "@/Layouts/AdminLayout";
import handleRedirect from "@/auth/handleRedirect";

const Products = () => {
  const [newProduct, setNewProduct] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    try {
      setLoading(!isLoading);
      const response = await axios(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/products?page=${page}&limit=10`
      );
      // console.log(response.data); // products
      setProducts(response.data.data);
      setLoading(!isLoading);
    } catch (err) {
      console.log(err);
    }
  };

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

          <div>
            <SelectInput items={[]} name={"Category"} />
          </div>
          <div>
            <SelectInput items={prices} name={"Price"} />
          </div>
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
        {isError ? (
          <div className="text-center text-2xl text-red-600 p-3">
            <h2>{error}</h2>
          </div>
        ) : isLoading ? (
          <div className="text-center p-3">
            <h2>Loading...</h2>
          </div>
        ) : (
          <ProductsTable products={products} setProducts={setProducts} />
        )}
      </div>

      <AddNewProduct
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        setProducts={setProducts}
      />
    </section>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "admin");
}

Products.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Products;
