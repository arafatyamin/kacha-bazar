import Button from "@/Components/CommonComponents/shared/Button";
import Input from "@/Components/CommonComponents/shared/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { CgKey } from "react-icons/cg";
import getCustomer from "@/utils/getCustomer";

const Login = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log("clicked");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
      </Head>
      <main>
        <div className="custom-container h-screen flex items-center justify-center">
          <div className="bg-white h-4/5 w-4/5 md:flex rounded-md overflow-hidden ">
            <div className="bg-primary w-1/2 hidden lg:inline p-6">
              <Link href={"/"} className="hidden md:inline text-primary">
                <Image
                  src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
                  alt="logo"
                  width={110}
                  height={40}
                />
              </Link>
              <Image
                src={"/images/contact-us.webp"}
                width={"300"}
                height={"300"}
                className="mx-auto"
              />
              <h2 className="max-w-xs text-center  font-bold mx-auto text-white mt-8">
                Started for free and get attractive offer
              </h2>
            </div>
            <div className="mx-auto my-4 p-4 flex flex-col gap-4">
              <div className="space-y-2 mb-2 sm:mb-8">
                <div className="bg-primary px-4 py-2 rounded-md md:hidden">
                  <Link href={"/"}>
                    <Image
                      src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
                      alt="logo"
                      width={110}
                      height={40}
                    />
                  </Link>
                </div>
                <h2 className="font-semibold">Welcome Back 👋</h2>
                <p className="text-sm text-gray-primary">
                  Get connected using your email and password
                </p>
              </div>

              {/* ========Input Section Start ========  */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label={"Email"}
                      id={"email"}
                      type={"email"}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      label={"Password"}
                      id={"password"}
                      type={"password"}
                      {...field}
                    />
                  )}
                />
                <div className="flex items-center gap-4">
                  <Button
                    text="Login Now"
                    type="submit"
                    fill={true}
                    className="text-sm sm:text-base"
                  />
                  <Link href="/signup">
                    <Button
                      text="Create Account"
                      varientColor={"primary"}
                      className="text-sm sm:text-base"
                    />
                  </Link>
                </div>
              </form>
              {/* ========Input Section End ========  */}

              <div className="text-center sm:m-4 text-gray-primary">or</div>

              {/* ========OAuth Section Start ========  */}
              <div className="lg:flex lg:space-x-2 space-y-2 lg:space-y-0">
                <a
                  href={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    "/auth/user/google"
                  }
                  className="flex items-center justify-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-primary-light duration-200 "
                >
                  <BsGoogle color="red" />
                  <p>Login with Google</p>
                </a>
                <div className="flex items-center justify-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-primary-light duration-200">
                  <BsFacebook className="w-8 h-6" color="blue" />
                  <p>Login with Facebook</p>
                </div>
              </div>
              {/* ========OAuth Section Start ========  */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  let customer = await getCustomer(context);

  if (customer) {
    return {
      redirect: {
        destination: "/user",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default Login;
