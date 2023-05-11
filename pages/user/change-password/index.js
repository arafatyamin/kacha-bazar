import Head from "next/head";
import { useForm } from "react-hook-form";
import CustomerDashboardLayout from "@/Layouts/CustomerDashboardLayout";
import getCustomer from "@/utils/getCustomer";
import isLoggedIn from "@/auth/isLoggedIn";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Head>
        <title>Change Password</title>
      </Head>
      <main>
        <div>
          <h3 className="mb-3 font-medium">Change Password</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="my-8">
              <label className="mb-1 inline-block" htmlFor="email">
                Email Address
              </label>
              <br />
              <input
                id="email"
                className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              />
            </div>

            {/* Current Password */}
            <div className="mb-8">
              <label className="mb-1 inline-block" htmlFor="currentPassword">
                Current Password
              </label>
              <br />
              <input
                id="currentPassword"
                className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
                placeholder="Your Current Password"
                {...register("currentPassword", { required: true })}
              />
            </div>
            {/* New Password */}
            <div>
              <label className="mb-1 inline-block" htmlFor="newPassword">
                New Password
              </label>
              <br />
              <input
                id="newPassword"
                className="outline-none w-full border px-6 py-2 rounded focus:border-green-500"
                placeholder="Your New Password"
                {...register("newPassword", { required: true })}
              />
            </div>
            {/* errors will return when field validation fails  */}

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className="bg-green-600 px-6 py-2 text-white rounded-full mt-8 cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </main>
    </>
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

  return { props: {} };
}

ChangePassword.getLayout = function (page) {
  const customer = page.props.children.props.customer;
  return (
    <CustomerDashboardLayout customer={customer}>
      {page}
    </CustomerDashboardLayout>
  );
};

export default ChangePassword;
