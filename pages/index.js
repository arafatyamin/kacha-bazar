import Header from "@/Components/CommonComponents/Header";
import HeroSection from "@/Components/CommonComponents/HeroSection";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Header />
        <HeroSection/>
      </main>
    </>
  );
};

export default home;
