import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import FormInput from "../FormInput";
import Fade from "react-reveal/Fade";
import moment from "moment";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function UpdateCoupon({ coupon, setUpdate }) {
  const [updating, setUpdating] = useState(false);
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(coupon.image || "");
  const dispatch = useDispatch();

  useEffect(() => {
    getCategories();
    return () => {
      setPreview("");
    };
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

  const handleImage = (e) => {
    const files = e.target.files;

    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      setUpdating(true);
      const response = await axios.put(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          "/admin/coupons/" +
          coupon?.id,
        formData,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "UPDATE_COUPON",
        coupon: response.data.data,
      });
      toast.success("Coupon updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      e.target.reset();
      setPreview("");
      setUpdating(false);
      setUpdate(false);
    }
  };
  return (
    <Fade right duration={300} className="">
      <div className={`fixed top-0 right-0   w-full duration-300 `}>
        <div className="flex justify-end relative">
          <div
            onClick={() => setUpdate(false)}
            className={`bg-black/60 hidden lg:block w-full h-screen`}
          ></div>

          <div className="w-full bg-white ">
            <div className="bg-gray-100 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg">
                  Update Coupon "{coupon?.campaignName}"
                </h2>
                <p className="text-xs">update your coupon details</p>
              </div>

              <div>
                <button
                  onClick={() => setUpdate(false)}
                  className="text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md"
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="my-3 lg:grid grid-cols-1 lg:grid-cols-3 p-6  gap-6 rounded-md shadow-sm h-[70%] lg:h-[80%] overflow-auto  bg-white text-xs">
                <div className="">
                  <p>Coupon Image</p>
                </div>
                <div className="col-span-2 ">
                  <fieldset className="w-full space-y-1 text-gray-100">
                    <div className="flex">
                      <input
                        multiple
                        type="file"
                        name="files"
                        onChange={handleImage}
                        className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
                      />
                    </div>
                  </fieldset>
                  <div className="flex gap-1">
                    {preview && (
                      <div className="w-[100px] h-[100px] p-2 border my-2 rounded-md">
                        <img src={preview} alt="coupon image" />
                      </div>
                    )}
                  </div>
                </div>
                <FormInput
                  title={"Campaign Name"}
                  name={"campaignName"}
                  value={coupon?.campaignName}
                />
                <FormInput
                  title={"Campaign Code"}
                  name={"campaignCode"}
                  value={coupon?.campaignCode}
                />
                <FormInput
                  title={"Coupon Validity Time"}
                  date
                  name={"expiresAt"}
                  value={moment(coupon?.expiresAt, "MMM DD, YYYY").format(
                    "YYYY-MM-DD"
                  )}
                />

                <FormInput
                  title={"Minmum Purches Amount"}
                  name={"minimumAmount"}
                  number
                  max={10000}
                  min={10}
                  value={coupon?.minimumAmount}
                />
                <FormInput
                  title={"Discount Percentage"}
                  name={"discountPercentage"}
                  number
                  max={100}
                  min={1}
                  value={coupon?.discountPercentage}
                />

                <p className="py-2">Category</p>
                <div className="col-span-2 ">
                  <select
                    name="category"
                    className="w-full p-2 rounded-md border bg-gray-100 active:bg-white"
                  >
                    <option value={""} className="hidden">
                      Select Category
                    </option>

                    {categories?.map((category) => (
                      <option
                        key={category.id}
                        value={category.id}
                        selected={category.id === coupon.category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-3 px-3 flex items-center gap-6">
                <button
                  onClick={() => setUpdate(false)}
                  className="py-3 px-6 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="py-3 px-6 bg-[#108a61] rounded-md 
          hover:bg-[#078057] text-white  duration-300 w-full"
                >
                  {updating ? "Updating..." : "Update Coupon"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default UpdateCoupon;
