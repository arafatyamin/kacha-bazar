import { useState, useEffect, useRef } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import FormInput from "./FormInput";

const AddNewProduct = ({ newProduct, setNewProduct }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [previews, setPreviews] = useState([]);
  const filesRef = useRef(null);

  useEffect(() => {
    getCategories();
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

  const handleImages = (e) => {
    const files = e.target.files;
    let previews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        previews.push(reader.result);
        if (previews.length === files.length) {
          setPreviews(previews);
        }
      };
    }
  };







  const handleSubmit = async (e) => {
    e.preventDefault();
    if (filesRef.current.files.length < 2) {
      return;
    }
    try {
      const formData = new FormData(e.target);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // contains new product data
      e.target.reset();
      setPreviews([]);
      setNewProduct(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`fixed top-0 ${
        newProduct ? "right-0" : "right-[-100%]"
      }   w-full duration-300  `}
    >
      <div className="flex justify-end relative  ">
        <div
          onClick={() => setNewProduct(false)}
          className={`bg-black/60 w-full hidden lg:block `}
        ></div>

        <div className="w-full bg-white ">
          <div className=" bg-gray-100 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg">Add Product</h2>
              <p className="text-xs">Add your product information from here</p>
            </div>

            <div>
              <button
                onClick={() => setNewProduct(!newProduct)}
                className=" text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"
              >
                <TiDeleteOutline />
              </button>
            </div>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="my-3 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm  bg-white text-xs">
              <FormInput title="Title" />
              <p>Images</p>
              <div className="col-span-2 ">
                <fieldset className="w-full space-y-1 text-gray-100">
                  <div className="flex">
                    <input
                      required
                      ref={filesRef}
                      multiple
                      type="file"
                      name="files"
                      onChange={handleImages}
                      className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
                    />
                  </div>
                </fieldset>
                <div className="flex gap-1">
                  {previews?.map((preview, i) => (
                    <div
                      className="w-[100px] h-[100px] p-2 border my-2 rounded-md"
                      key={i}
                    >
                      <img src={preview} alt="product image" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="py-2">Description</p>
              <div className="col-span-2 ">
                <textarea
                  className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                  name="description"
                  rows="5"
                  required
                ></textarea>
              </div>
              <p className="py-2">Category</p>
              <div className="col-span-2 ">
                <select
                  onChange={getSubcategories}
                  className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
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
                  className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
