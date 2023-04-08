import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import FlotingCart from "@/Components/CustomerComponents/FlotingCart/FlotingCart";
import Header from "@/Components/CommonComponents/Header";
import HeroSection from "@/Components/CommonComponents/HeroSection";
import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import Head from "next/head";
import AboutUs from "./AboutUs/AboutUs";
import TinyBanner from "@/Components/CustomerComponents/Banner/TinyBanner";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="relative">
        <Header />
        <HeroSection/>


       
        {/* ======================Tiny Banner Part Start========================== */}

        <TinyBanner></TinyBanner>

        {/* ======================Tiny Banner End=============================== */}
        

        {/* ======================About Us Part Start============================= */}

        {/* <AboutUs></AboutUs> */}

        {/* ======================About Us Part End=============================== */}



        {/* ======================Mobile Ads Banner Part Start====================== */}

        <MobileAdsBanner></MobileAdsBanner>
        
        {/* ======================Mobile Ads Banner Part End====================== */}



        {/* ======================App Store Section Part Start====================== */}
        <AppStoreBanner></AppStoreBanner>
        {/* ======================App Store Section Part End====================== */}


        {/* ======================Floating cart card component start ====================== */}
          <div className=" fixed top-80 right-0">
            <FlotingCart></FlotingCart>
          </div>
        {/* ======================Floating cart card component start ====================== */}


      </main>
    </>
  );
};

export default home;

