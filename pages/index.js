import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import FlotingCart from "@/Components/CustomerComponents/FlotingCart/FlotingCart";
import Header from "@/Components/CommonComponents/Header";
import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
// import UserSideNav from "@/Components/CustomerComponents/CustomerAdmin/UserSideNav";
import FeaturedProducts from "@/Components/CustomerComponents/HomeComponents/FeaturedProducts";
import HeroSection from "@/Components/CustomerComponents/HomeComponents/HeroSection";
import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import { categoryItems } from "@/data/data";
import Head from "next/head";
import { offeredProductItems, productItems } from "@/data/productData";
import FAQ from "./FAQ/FAQ";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="relative">
        <Header />
        <HeroSection/>
        

        {/* ======================Featured Categories Part Start====================== */}
        <div className="container mx-auto px-3 lg:px-10 py-6 ">
          <div className="text-center mt-10">
            <h2 className="font-bold text-xl sm:text-2xl">
              Featured Categories
            </h2>
            <p className="text-gray-primary text-sm sm:text-base">
              Choose your necessary products from this feature categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8">
            {categoryItems.map((categoryItem) => (
              <CategoryCard data={categoryItem} key={categoryItem.id} />
            ))}
          </div>
          {/* <UserSideNav /> */}
        </div>
        {/* ======================Featured Categories Part End====================== */}


        {/* ======================Featured Products Part Start====================== */}
        <FeaturedProducts Items={productItems}/>

        {/* ======================Featured Products Part End====================== */}


        {/* ======================Mobile Ads Banner Part Start====================== */}

        <MobileAdsBanner></MobileAdsBanner>
        
        {/* ======================Mobile Ads Banner Part End====================== */}

        {/* ======================App Store Section Part Start====================== */}
        <FeaturedProducts Items={offeredProductItems}/>
        <AppStoreBanner></AppStoreBanner>
        {/* ======================App Store Section Part End====================== */}

        {/* ======================Floating cart card component start ====================== */}
          <div className=" fixed top-80 right-0">
            <FlotingCart></FlotingCart>
          </div>
        {/* ======================Floating cart card component start ====================== */}


        {/* ====================== FAQ Start =============================== */}
          <FAQ/>
        {/* ====================== FAQ END =============================== */}

      </main>
    </>
  );
};

export default home;
