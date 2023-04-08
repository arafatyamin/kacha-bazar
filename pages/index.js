import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
import Header from "@/Components/CommonComponents/Header";
import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
import UserSideNav from "@/Components/CustomerComponents/CustomerAdmin/UserSideNav";
import FeaturedProducts from "@/Components/CustomerComponents/HomeComponents/FeaturedProducts";
import HeroSection from "@/Components/CustomerComponents/HomeComponents/HeroSection";
import { categoryItems } from "@/data/data";
import Head from "next/head";
import { offeredProductItems, productItems } from "@/data/productData";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Header />
        <HeroSection />
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
        <div className="block mx-auto max-w-screen-2x mt-24">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
              <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                  <div className="lg:w-full">
                    <span className="text-base lg:text-lg">
                      Organic Products and Food
                    </span>
                    <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">
                      Quick Delivery to
                      <span className="text-emerald-500 ml-1">Your Home</span>
                    </h2>
                    <p className="text-sm font-sans leading-6">
                      There are many products you will find our shop, Choose
                      your daily necessary product from our KachaBazar shop and
                      get some special offer. See Our latest discounted products
                      from here and get a special discount.
                    </p>
                    <a
                      href=""
                      className="lg:w-25% text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600"
                    >
                      Download App
                    </a>
                  </div>
                  <div className="">
                    <span className="">
                      <img
                        className=" object-cover ml-20"
                        src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fdelivery-boy.png&w=384&q=75"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======================Mobile Ads Banner Part End====================== */}

        {/* ======================App Store Section Part Start====================== */}

        <FeaturedProducts Items={offeredProductItems}/>
        <AppStoreBanner></AppStoreBanner>

        {/* ======================App Store Section Part End====================== */}
      </main>
    </>
  );
};

export default home;

