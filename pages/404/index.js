import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CustomerLayout from "@/Layouts/CustomerLayout";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main>
        <div className="container mx-auto px-3">
          <div className="h-screen">
            <Image
              src={"/images/error/not-found.gif"}
              alt="Page not found"
              width="550"
              height="460"
              className="mx-auto"
            />
            <div className="text-center mt-5">
              <h2 className="mb-4 text-2xl lg:text-5xl font-medium uppercase">
                We are sorry, Page not found!
              </h2>
              <p className="text-lg lg:text-2xl">
                The page you looking for might have been removed had it's name
                changed or is temporary unavailable.
              </p>
              <Link
                href="/"
                className="capitalize bg-green-600 px-5 py-3 inline-block mt-6 text-white font-medium rounded-full"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

ErrorPage.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default ErrorPage;
