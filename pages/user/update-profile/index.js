import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import getCustomer from "@/utils/getCustomer";
import isLoggedIn from "@/auth/isLoggedIn";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h3 className="mb-3 font-medium">Update Profile</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        {/* register your input into the hook by invoking the "register" function */}
        {/* upload image */}
        <div className=" col-span-2">
          <label className="mb-1 inline-block" htmlFor="name">
            Photo
          </label>
          <br />
          <div className="border border-dashed border-gray-500 relative">
            <input
              type="file"
              multiple
              className="cursor-pointer relative block opacity-0 w-full h-full p-16 z-50"
              {...register("file", { required: true })}
            />
            <div className="text-center p-6 absolute top-0 right-0 left-0 m-auto">
              <span className="flex justify-center text-3xl text-emerald-500">
                <AiOutlineCloudUpload />
              </span>
              <h4 className="text-sm mt-2">Drag your image here</h4>
              <p className="text-xs text-gray-400">
                (only*.jpeg and *.png images will be accepted)
              </p>
            </div>
          </div>
        </div>

        {/* input your name */}
        <div className="my-4">
          <label className="mb-1 inline-block" htmlFor="name">
            Full Name
          </label>
          <br />
          <input
            id="name"
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="Enter Your Full Name"
            {...register("name", { required: true })}
          />
        </div>
        {/* your address */}
        <div className="my-4">
          <label className="mb-1 inline-block" htmlFor="email">
            Your Address
          </label>
          <br />
          <input
            id="address"
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="Your Address"
            {...register("address", { required: true })}
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
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="justin@gmail.com"
            {...register("email", { required: true })}
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
            className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
            placeholder="212-512-2888"
            {...register("phoneNumber", { required: true })}
          />
        </div>

        {/* errors will return when field validation fails  */}

        {errors.exampleRequired && <span>This field is required</span>}

        <div className="col-span-2 text-right">
          <input
            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 text-white rounded-full mt-2 cursor-pointer"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const loggedIn = await isLoggedIn(context);

  if (!loggedIn) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: { loggedIn } };
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
