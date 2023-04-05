import HomePage from "@/Components/Home/HomePage";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <HomePage></HomePage>
      </main>
    </>
  );
};

export default home;
