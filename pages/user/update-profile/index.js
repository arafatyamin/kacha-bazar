import { useForm } from "react-hook-form";
import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import handleRedirect from "@/auth/handleRedirect";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const UpdateProfile = ({ token }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/details",
        {
          headers: {
            authToken: token,
          },
        }
      );
      setDetails(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      for (let key in data) {
        if (!data[key]) {
          delete data[key];
        }
      }
      const response = await axios.put(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/details",
        data,
        {
          headers: {
            authToken: token,
          },
        }
      );
      toast.success("Details updated");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h3 className="mb-3 font-medium">Update Profile</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        {/* input your name */}
        <div className="my-4">
          <label className="mb-1 inline-block" htmlFor="name">
            Name
          </label>
          <br />
          <input
            id="name"
            defaultValue={details?.name}
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="Enter Your Full Name"
            {...register("name")}
          />
        </div>

        {/* Email address */}
        <div className="my-4">
          <label className="mb-1 inline-block" htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            id="email"
            defaultValue={details?.email}
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="justin@gmail.com"
            {...register("email")}
          />
        </div>

        {/*  Phone/Mobile */}
        <div className="my-4">
          <label className="mb-1 inline-block" htmlFor="currentPassword">
            Phone/Mobile
          </label>
          <br />
          <input
            id="phoneNumber"
            defaultValue={details?.phone}
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="212-512-2888"
            {...register("phone")}
          />
        </div>

        {/* errors will return when field validation fails  */}

        {errors.exampleRequired && <span>This field is required</span>}

        <div className="col-span-2 text-right">
          <input
            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 text-white rounded-full mt-2 cursor-pointer"
            type="submit"
            value={loading ? "Submiting" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  return await handleRedirect(context, "customer");
}

UpdateProfile.getLayout = function (page) {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return (
    <CustomerDashboardLayout loggedIn={loggedIn}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default UpdateProfile;
