import { useState, useEffect, useRef } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import FormInput from "./FormInput";
import SelectImage from "./SelectImage";
import { useDispatch, useSelector } from "react-redux";
import { postNewProduct } from "@/store/thunk/admin/products";
import { getCategorysData } from "@/store/thunk/admin/category";

const AddNewProduct = ({ newProduct, setNewProduct }) => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const dispatch = useDispatch();
  const { postProductLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    getCategories();
    // dispatch(getCategorysData());
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + `/categories`
      );
      setCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSubcategories = (e) => {
    const sc = categories?.find(
      (category) => category?.id === e.target.value
    )?.subCategories;
    setSubCategories(sc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length < 2) {
      alert("minimum 2 images required");
      return;
    }

    const formData = new FormData(e.target);

    for (let i = 0; i < images.length; i++) {
      formData.append("files", images[i]);
    }

    dispatch(postNewProduct(formData, setNewProduct));

    e.target.reset();
    setImages([]);
  };

  return (
    <div
      className={`fixed top-0 ${
        newProduct ? "right-0" : "right-[-100%]"
      }   w-full h-full duration-300 overflow-y-scroll`}
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
              <p className="text-xs">Add your product information from here</p>
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
          <form onSubmit={handleSubmit}>
            <div className=" lg:my-2 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-5 rounded-md shadow-sm  bg-white text-xs">
              <FormInput title="Title" />
              <p>Images</p>
              <div className="col-span-2 ">
                <SelectImage images={images} setImages={setImages} />
              </div>

              <p className="py-2">Description</p>
              <div className="col-span-2 ">
                <textarea
                  className="w-full p-2 focus:outline-none rounded-md border bg-gray-100"
                  name="description"
                  rows="2"
                  required
                ></textarea>
              </div>
              <p className="py-2">Category</p>
              <div className="col-span-2 ">
                <select
                  onChange={getSubcategories}
                  className="w-full p-2 rounded-md border bg-gray-100 active:bg-white"
                >
                  <option value={""} className="hidden">
                    Select Category
                  </option>

                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className="py-2">Sub Category</p>
              <div className="col-span-2 ">
                <select
                  name="subCategory"
                  className="w-full p-2 rounded-md border bg-gray-100 active:bg-white"
                >
                  <option value={""} className="hidden">
                    Select Sub Category
                  </option>
                  {subCategories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <FormInput title="Unit" placeholder="(kg/pc/lb/ml/g...etc)" />
              <FormInput title="Quantity" number />
              <FormInput title="Orginal Price" name="originalPrice" number />
              <FormInput title="Discount" number />
              <FormInput
                title="Tags"
                placeholder="write tags (comma separated)"
              />
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
            <div className="col-span-3 my-3 flex items-center gap-6">
              <button
                onClick={() => setNewProduct(false)}
                className="py-3 px-6 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="py-3 px-6 bg-[#108a61] rounded-md 
            hover:bg-[#078057] text-white  duration-300 w-full"
              >
                {postProductLoading ? "Loading..." : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
