import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
import Header from "@/Components/CommonComponents/Header";
import HeroSection from "@/Components/CommonComponents/HeroSection";
import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import Head from "next/head";
import AboutUs from "./AboutUs/AboutUs";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Header />
        <HeroSection/>
        

        {/* ======================About Us Part Start=============================== */}

        <AboutUs></AboutUs>

        {/* ======================About Us Part End=============================== */}



        {/* ======================Mobile Ads Banner Part Start====================== */}

        <MobileAdsBanner></MobileAdsBanner>
        
        {/* ======================Mobile Ads Banner Part End====================== */}



        {/* ======================App Store Section Part Start====================== */}

        <AppStoreBanner></AppStoreBanner>

        {/* ======================App Store Section Part End====================== */}

      </main>
    </>
  );
};

export default home;

