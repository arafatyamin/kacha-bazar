import { useState, useEffect, useRef } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import FormInput from "./FormInput";
import SelectImage from "./SelectImage";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const UpdateProduct = ({ setUpdateModal, selectProduct }) => {
  const [images, setImages] = useState([...selectProduct.images]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const {
    title,
    description,
    discount,
    originalPrice,
    published,
    quantity,
    subCategory: selectSubCategory,
    category: selectCategory,
    tags,
    unit,
  } = selectProduct || {};

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      getSubcategories(null, selectCategory.id);
    }
  }, [categories]);

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

  const getSubcategories = (e, id) => {
    const sc = categories?.find(
      (category) => category.id === id || category.id === e?.target?.value
    )?.subCategories;
    setSubCategories(sc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (let i = 0; i < images.length; i++) {
      formData.append("files", images[i]);
    }

    try {
      setUpdating(!updating);
      const response = await axios.put(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          `/products/${selectProduct.id}`,
        formData,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "UPDATE_PRODUCT",
        product: response.data.data,
      });
      toast.success("Product updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      e.target.reset();
      setImages([]);
      setUpdating(!updating);
      setUpdateModal(false);
    }
  };

  return (
    <Fade right duration={300} className="">
      <div className={`fixed top-0 right-0  w-full h-full overflow-y-scroll `}>
        <div className="flex justify-end relative">
          <div
            onClick={() => setUpdateModal(false)}
            className={`bg-black/60 w-full hidden lg:block`}
          ></div>

          <div className="w-full bg-white ">
            <div className="bg-gray-100 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg">Update Product "{title}"</h2>
                <p className="text-xs">
                  Add your product information from here
                </p>
              </div>

              <div>
                <button
                  onClick={() => setUpdateModal(false)}
                  className="text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" lg:my-2 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-5 rounded-md shadow-sm  bg-white text-xs">
                <FormInput title={"Tittle"} value={title} />
                <p>Images</p>
                <div className="col-span-2 ">
                  <SelectImage images={images} setImages={setImages} />
                </div>
                <p className="py-2">Description</p>
                <div className="col-span-2 ">
                  <textarea
                    className="w-full p-2 focus:outline-none rounded-md border bg-gray-100"
                    name="description"
                    rows="7"
                    required
                    defaultValue={description}
                  ></textarea>
                </div>
                <p className="py-2">Category</p>
                <div className="col-span-2 ">
                  <select
                    onChange={(e) => getSubcategories(e)}
                    className="w-full p-2 rounded-md border bg-gray-100 active:bg-white"
                  >
                    <option value={""} className="hidden">
                      Select Category
                    </option>

                    {categories?.map((category) => (
                      <option
                        selected={selectCategory.id === category.id}
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="py-2">Sub Category</p>
                <div className="col-span-2 ">
                  <select
                    required
                    name="subCategory"
                    className="w-full p-2 rounded-md border bg-gray-100 active:bg-white"
                  >
                    <option value={""} className="hidden">
                      Select Sub Category
                    </option>
                    {subCategories?.map((subCategory) => (
                      <option
                        selected={selectSubCategory.id === subCategory.id}
                        key={subCategory.id}
                        value={subCategory.id}
                      >
                        {subCategory.name}
                      </option>
                    ))}
                  </select>
                </div>
                <FormInput
                  value={unit}
                  title="Unit"
                  placeholder="(kg/pc/lb/ml/g...etc)"
                />
                <FormInput value={quantity} title="Quantity" number />
                <FormInput
                  value={originalPrice}
                  title="Orginal Price"
                  name="originalPrice"
                  number
                />
                <FormInput value={discount} title="Discount" number />
                <FormInput
                  value={tags}
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
                        defaultChecked={published}
                      />
                      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200  peer-checked:bg-[#07895e]"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-span-3 my-3 flex items-center gap-6">
                <input
                  onClick={() => setUpdateModal(false)}
                  type="button"
                  value={"Cancel"}
                  className="py-3 px-6 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full cursor-pointer"
                />

                <button
                  type="submit"
                  className="py-3 px-6 bg-[#108a61] rounded-md 
            hover:bg-[#078057] text-white  duration-300 w-full"
                >
                  {updating ? "Updating..." : "Update Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default UpdateProduct;
