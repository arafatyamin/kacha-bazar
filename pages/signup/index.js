import Button from "@/Components/CommonComponents/shared/Button";
import Input from "@/Components/CommonComponents/shared/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { CgKey } from "react-icons/cg";
import handleLPRedirect from "@/auth/handleLPRedirect";

const SignUp = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
      checkbox: false,
    },
  });

  const onValid = (data) => {
    console.log(data);
    console.log("clicked");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up</title>
      </Head>
      <main>
        <div className="custom-container h-screen flex items-center justify-center">
          <div className="bg-white h-4/5 lg:w-4/5 w-full md:flex rounded-md overflow-hidden ">
            {/* <=======left portion Start======> */}
            <div className="bg-primary w-1/2 hidden lg:inline p-6">
              <Link href={"/"}>
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
            {/* <=======left portion End======> */}
            {/* <=======Right portion End======> */}

            <div className="mx-auto my-4 p-4 flex flex-col gap-4">
              <div className="space-y-2 mb-2 sm:mb-8">
                <div className="bg-primary px-4 py-2 rounded-md lg:hidden w-full">
                  <Link href={"/"}>
                    <Image
                      src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
                      alt="logo"
                      width={110}
                      height={40}
                    />
                  </Link>
                </div>
                <h2 className="font-semibold">Get's Started.</h2>
                <p className="text-sm text-gray-primary">
                  Already have an account?{" "}
                  <Link href="/login" className="text-red font-semibold">
                    Log in
                  </Link>
                </p>
              </div>
              {/* ========Input Section Start ========  */}
              <form
                onSubmit={handleSubmit(onValid)}
                className="flex flex-col  w-full space-y-4 "
              >
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

                <div className="flex items-center justify-center">
                  <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type={"checkbox"}
                        className={"border-none"}
                        {...field}
                      />
                    )}
                  />
                  <label className="text-xs text-gray-primary">
                    I agree to Platform's{" "}
                    <Link
                      href={"/terms-and-condition"}
                      className="text- text-primary font-semibold"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={"/privacy-policy"}
                      className="text- text-primary font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <Button text="SIGN UP" type="submit" varientColor="primary" />
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
                  <p>Sign up with Google</p>
                </a>
                <div className="flex items-center justify-center gap-2 border border-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-primary-light duration-200">
                  <BsFacebook className="w-8 h-6" color="blue" />
                  <p>Sign up with Facebook</p>
                </div>
              </div>
              {/* ========OAuth Section Start ========  */}
            </div>
            {/* <=======Right portion End======> */}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleLPRedirect(context);
}

export default SignUp;
