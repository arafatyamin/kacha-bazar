import Button from "@/Components/CommonComponents/shared/Button";
import Input from "@/Components/CommonComponents/shared/Input";
import isLoggedIn from "@/auth/isLoggedIn";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { CgKey } from "react-icons/cg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import handleLPRedirect from "@/auth/handleLPRedirect";

const init = {
  email: "",
  password: "",
  termsChecked: false,
};
const Login = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({ ...init });

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const logIn = async (e) => {
    e.preventDefault();
    const response = await signIn("admin", {
      email: "zahid@gmail.com",
      password: "123",
      redirect: false,
    });
    if (response.ok) {
      router.push("/admin/dashbord");
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
      </Head>
      <main>
        <section>
          <div className="container">
            <div className="h-screen flex items-center justify-center">
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
                <div className="mx-auto my-4 p-4 flex flex-col gap-4 self-center">
                  <div className="space-y-2 mb-2 sm:mb-8">
                    <div className="bg-primary px-4 py-2 rounded-md lg:hidden">
                      <Link href={"/"}>
                        <Image
                          src="https://kachabazar-store.vercel.app/logo/logo-light.svg"
                          alt="logo"
                          width={110}
                          height={40}
                        />
                      </Link>
                    </div>
                    <h2 className="font-semibold">Admin login</h2>
                    <p className="text-sm text-gray-primary">
                      Get connected using your email and password
                    </p>
                  </div>

                  {/* ========Input Section Start ========  */}
                  <form onSubmit={logIn} className="space-y-2 ">
                    <Input
                      name={"email"}
                      label={"Email"}
                      Icon={AiOutlineMail}
                      value={formState.email}
                      changeHandler={changeHandler}
                      type={"email"}
                      className={"overflow-hidden"}
                    />
                    <Input
                      name={"password"}
                      label={"Password"}
                      type={"password"}
                      Icon={CgKey}
                      value={formState.password}
                      changeHandler={changeHandler}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Input
                          type="checkbox"
                          className="border-none"
                          onChange={changeHandler}
                          value={formState.termsChecked}
                        />

                        <p className="text-xs sm:text-sm text-gray-primary">
                          Remember me
                        </p>
                      </div>
                      <Link
                        href={"#"}
                        className="text-xs sm:text-sm text-gray-primary hover:text-primary"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        text="Login Now"
                        type="submit"
                        fill={true}
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleLPRedirect(context);
}

export default Login;
